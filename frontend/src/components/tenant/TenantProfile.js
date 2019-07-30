import React from "react";
import { editTenant } from "../../actions/tenant";

import { connect } from "react-redux";

class TenantProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      firstname: "",
      lastname: "",
      email: "",
      national_id: "",
      phone_number: "",
      dob: "",
      property: "",
      unit: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    const tenant = _.find(this.props.tenant, function(o) {
      return o.id == id;
    });
    this.setState({
      firstname: tenant.firstname,
      lastname: tenant.lastname,
      email: tenant.email,
      national_id: tenant.national_id,
      phone_number: tenant.phone_number,
      dob: tenant.date_due,
      property: tenant.property.id,
      unit: tenant.unit.id
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  _onUnitChange = e => this.setState({ unit: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      email,
      national_id,
      phone_number,
      dob,
      property,
      unit
    } = this.state;
    const formData = new FormData();
    const id = this.props.match.params.id;
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("national_id", national_id);
    formData.append("phone_number", phone_number);
    formData.append("dob", dob);
    formData.append("property", property);
    formData.append("unit", unit);
    this.props.editTenant(formData, id);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const id = this.props.match.params.id;

    const tenant = _.find(this.props.tenant, function(o) {
      return o.id == id;
    });

    const filteredUnit = _.filter(this.props.unit, function(o) {
      return o.property.id == tenant.unit.property.id;
    });

    const unitOptions = filteredUnit.map(unit => (
      <option key={unit.id} value={unit.id}>
        {unit.name}
      </option>
    ));

    const {
      firstname,
      lastname,
      email,
      national_id,
      phone_number,
      dob,
      unit
    } = this.state;
    return (
      <div className="container">
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Tenant Profile
        </h1>

        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <form onSubmit={this.onSubmit}>
          <div className="container row">
            <div className="container col">
              <div className="form-group">
                <label>Firstname</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  onChange={this.onChange}
                  value={firstname}
                />
              </div>
            </div>
            <div className="container col">
              <div className="form-group">
                <label>Lastname</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  onChange={this.onChange}
                  value={lastname}
                />
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="container col">
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
            </div>
            <div className="container col">
              <div className="form-group">
                <label>National ID/Passport No</label>
                <input
                  className="form-control"
                  type="number"
                  name="national_id"
                  onChange={this.onChange}
                  value={national_id}
                />
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="container col">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone_number"
                  onChange={this.onChange}
                  value={phone_number}
                />
              </div>
            </div>
            <div className="container col">
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  className="form-control"
                  type="date"
                  name="dob"
                  onChange={this.onChange}
                  value={dob}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>
              Unit:
              <select
                style={{ marginLeft: "5px" }}
                className="btn btn-primary dropdown-toggle"
                value={unit}
                onChange={this._onUnitChange}
              >
                <option defaultValue value="">
                  Select a Unit...
                </option>
                {unitOptions}
              </select>
            </label>
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn btn-block  btn-success">
              Edit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  property: state.property.property,
  unit: state.unit.unit,
  agreement: state.agreement.agreement,
  transaction: state.transaction.transaction,
  tenant: state.tenant.tenant
});

export default connect(
  mapStateToProps,
  { editTenant }
)(TenantProfile);
