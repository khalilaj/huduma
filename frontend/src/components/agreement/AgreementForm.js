import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addAgreement } from "../../actions/agreement";

import { connect } from "react-redux";

class AgreementForm extends React.Component {
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
    this.setState({ property: this.props.propId });
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

    formData.append("tittle", tittle);
    formData.append("description", description);
    formData.append("deposit_amount", deposit_amount);
    formData.append("rent_amount", rent_amount);
    formData.append("tenant", tenant);
    formData.append("property", property);
    formData.append("unit", unit);
    this.props.addAgreement(formData);

    this.setState({
      tittle: "",
      description: "",
      deposit_amount: "",
      rent_amount: "",
      unit: "",
      tenant: ""
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
    const tenantOptions = this.props.tenant.map(tenant => (
      <option key={tenant.id} value={tenant.id}>
        {tenant.firstname} {tenant.lastname}
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
      <div className="mt-3">
        <Button
          color="primary"
          style={{ marginRight: "150px" }}
          className=" text-center float-right"
          onClick={this.toggle}
        >
          Add Tenant Agreement
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}> Add Tenant Agreement</ModalHeader>
          <ModalBody>
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
                <button type="submit" className="btn btn-block btn-success">
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
  { addAgreement }
)(AgreementForm);
