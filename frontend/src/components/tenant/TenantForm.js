import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addTenant } from "../../actions/tenant";

import { connect } from "react-redux";

class TenantForm extends React.Component {
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
    this.setState({ property: this.props.propId });
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

    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("national_id", national_id);
    formData.append("phone_number", phone_number);
    formData.append("dob", dob);
    formData.append("property", property);
    formData.append("unit", unit);
    this.props.addTenant(formData);

    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      national_id: "",
      phone_number: "",
      dob: "",
      unit: ""
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const unitOptions = this.props.unit.map(unit => (
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
      <div className="mt-3">
        <Button
          color="primary"
          style={{ marginRight: "150px" }}
          className=" text-center float-right"
          onClick={this.toggle}
        >
          Add Tenant
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Tenant</ModalHeader>
          <ModalBody>
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
                <button type="submit" className="btn  btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default connect(
  null,
  { addTenant }
)(TenantForm);
