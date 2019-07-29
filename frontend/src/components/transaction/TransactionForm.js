import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { addTransaction } from "../../actions/transaction";

import { connect } from "react-redux";

class TransactionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      amount_due: "",
      amount_paid: "",
      transaction_type: "RN",
      transaction_status: "UN",
      date_paid: "",
      date_due: "",
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
  _onTransactionTypeChange = e =>
    this.setState({ transaction_type: e.target.value });
  _onTransactionStatusChange = e =>
    this.setState({ transaction_status: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      name,
      amount_due,
      amount_paid,
      transaction_type,
      transaction_status,
      date_paid,
      date_due,
      unit,
      property,
      tenant
    } = this.state;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("amount_due", amount_due);
    formData.append("amount_paid", amount_paid);
    formData.append("transaction_type", transaction_type);
    formData.append("transaction_status", transaction_status);
    formData.append("date_paid", date_paid);
    formData.append("date_due", date_due);
    formData.append("tenant", tenant);
    formData.append("property", property);
    formData.append("unit", unit);
    this.props.addTransaction(formData);

    this.setState({
      name: "",
      amount_due: "",
      amount_paid: "",
      transaction_type: "",
      transaction_status: "",
      date_paid: "",
      date_due: "",
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
      name,
      amount_due,
      amount_paid,
      transaction_type,
      transaction_status,
      date_paid,
      date_due,
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
          Add Transaction
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Transaction</ModalHeader>
          <ModalBody>
            <form onSubmit={this.onSubmit}>
              <div className="container row">
                <div className="container col">
                  <div className="form-group">
                    <label>Amount Due</label>
                    <input
                      className="form-control"
                      type="number"
                      name="amount_due"
                      onChange={this.onChange}
                      value={amount_due}
                    />
                  </div>
                </div>
                <div className="container col">
                  <div className="form-group">
                    <label>Amount Paid</label>
                    <input
                      className="form-control"
                      type="text"
                      name="amount_paid"
                      onChange={this.onChange}
                      value={amount_paid}
                    />
                  </div>
                </div>
              </div>

              <div className="container row">
                <div className="container col">
                  <div className="form-group">
                    <label>
                      Transaction Type:
                      <select
                        style={{ marginLeft: "5px" }}
                        className="btn btn-primary dropdown-toggle"
                        value={transaction_type}
                        onChange={this._onTransactionTypeChange}
                      >
                        <option className="dropdown-item" value="RN">
                          Rent
                        </option>
                        <option className="dropdown-item" value="SC">
                          Service Charge
                        </option>
                        <option className="dropdown-item" value="DP">
                          Deposit
                        </option>
                        <option className="dropdown-item" value="MT">
                          Maintenance
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
                <div className="container col">
                  <div className="form-group">
                    <label>
                      Transaction Status:
                      <select
                        style={{ marginLeft: "20px" }}
                        className="btn btn-primary dropdown-toggle"
                        value={transaction_status}
                        onChange={this._onTransactionStatusChange}
                      >
                        <option className="dropdown-item" value="UN">
                          Unpaid
                        </option>
                        <option className="dropdown-item" value="P">
                          Paid
                        </option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>

              <div className="container row">
                <div className="container col">
                  <div className="form-group">
                    <label>Date Due</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date_due"
                      onChange={this.onChange}
                      value={date_due}
                    />
                  </div>
                </div>
                <div className="container col">
                  <div className="form-group">
                    <label>Date Paid</label>
                    <input
                      className="form-control"
                      type="date"
                      name="date_paid"
                      onChange={this.onChange}
                      value={date_paid}
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
  { addTransaction }
)(TransactionForm);
