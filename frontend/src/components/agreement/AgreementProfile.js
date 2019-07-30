import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { editAgreement } from "../../actions/agreement";

import { connect } from "react-redux";

import UnitForm from "../unit/UnitForm";
import TenantForm from "../tenant/TenantForm";
class AgreementProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      tittle: "",
      description: "",
      deposit_amount: "",
      rent_amount: "",
      property: "",
      unit: "",
      tenant: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    const agreement = _.find(this.props.agreement, function(o) {
      return o.id == id;
    });
    this.setState({
      tittle: agreement.tittle,
      lastname: agreement.lastname,
      description: agreement.description,
      deposit_amount: agreement.deposit_amount,
      rent_amount: agreement.rent_amount,
      dob: agreement.date_due,
      property: agreement.property.id,
      unit: agreement.unit.id,
      tenant: agreement.tenant.id
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  _onUnitChange = e => this.setState({ unit: e.target.value });
  _onTenantChange = e => this.setState({ tenant: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      tittle,
      description,
      deposit_amount,
      rent_amount,
      unit,
      property,
      tenant
    } = this.state;
    const formData = new FormData();
    const id = this.props.match.params.id;
    formData.append("tittle", tittle);
    formData.append("description", description);
    formData.append("deposit_amount", deposit_amount);
    formData.append("rent_amount", rent_amount);
    formData.append("tenant", tenant);
    formData.append("property", property);
    formData.append("unit", unit);
    this.props.editAgreement(formData, id);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const id = this.props.match.params.id;

    const agreement = _.find(this.props.agreement, function(o) {
      return o.id == id;
    });
    const filteredUnit = _.filter(this.props.unit, function(o) {
      return o.property.id == agreement.property.id;
    });
    const filteredTenant = _.filter(this.props.tenant, function(o) {
      return o.property.id == agreement.property.id;
    });

    const unitOptions = filteredUnit.map(unit => (
      <option key={unit.id} value={unit.id}>
        {unit.name}
      </option>
    ));

    const tenantOptions = filteredTenant.map(tenant => (
      <option key={tenant.id} value={tenant.id}>
        {tenant.name}
      </option>
    ));

    const {
      tittle,
      description,
      deposit_amount,
      rent_amount,
      unit,
      tenant
    } = this.state;
    return (
      <div className="container">
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Agreement Details
        </h1>

        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Agreement Tittle</label>
            <input
              className="form-control"
              type="text"
              name="tittle"
              onChange={this.onChange}
              value={tittle}
            />
          </div>
          <div className="form-group">
            <label>Agreement Description</label>
            <textarea
              rows="5"
              className="form-control"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>
          <div className="container row">
            <div className="container col">
              <div className="form-group">
                <label>Deposit Amount</label>
                <input
                  className="form-control"
                  type="number"
                  name="deposit_amount"
                  onChange={this.onChange}
                  value={deposit_amount}
                />
              </div>
            </div>
            <div className="container col">
              <div className="form-group">
                <label>Rent Amount</label>
                <input
                  className="form-control"
                  type="text"
                  name="rent_amount"
                  onChange={this.onChange}
                  value={rent_amount}
                />
              </div>
            </div>
          </div>

          <div className="container row">
            <div className="container col">
              <div className="form-group">
                <label>
                  Tenant:
                  <select
                    style={{ marginLeft: "5px" }}
                    className="btn btn-primary dropdown-toggle"
                    value={tenant}
                    onChange={this._onTenantChange}
                  >
                    <option defaultValue value="">
                      Select a Tenant...
                    </option>
                    {tenantOptions}
                  </select>
                </label>
              </div>
            </div>
            <div className="container col">
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
            </div>
          </div>

          <div className="form-group text-center">
            <button type="submit" className="btn btn-block  btn-success">
              Submit
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
  { editAgreement }
)(AgreementProfile);
