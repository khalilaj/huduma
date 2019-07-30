import React from "react";
import { editTransaction } from "../../actions/transaction";

import { connect } from "react-redux";

class TransactionProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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
    const id = this.props.match.params.id;

    const transaction = _.find(this.props.transaction, function(o) {
      return o.id == id;
    });
    this.setState({
      amount_due: transaction.amount_due,
      amount_paid: transaction.amount_paid,
      transaction_type: transaction.transaction_type,
      transaction_status: transaction.transaction_status,
      date_paid: transaction.date_paid,
      date_due: transaction.date_due,
      property: transaction.property.id,
      unit: transaction.unit.id,
      tenant: transaction.tenant.id
    });
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
    const id = this.props.match.params.id;
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
    this.props.editTransaction(formData, id);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const id = this.props.match.params.id;

    const transaction = _.find(this.props.transaction, function(o) {
      return o.id == id;
    });

    const filteredUnit = _.filter(this.props.unit, function(o) {
      return o.property.id == transaction.unit.property.id;
    });

    const filteredTenant = _.filter(this.props.tenant, function(o) {
      return o.property.id == transaction.unit.property.id;
    });

    const unitOptions = filteredUnit.map(unit => (
      <option key={unit.id} value={unit.id}>
        {unit.name}
      </option>
    ));
    const tenantOptions = filteredTenant.map(tenant => (
      <option key={tenant.id} value={tenant.id}>
        {tenant.firstname} {tenant.lastname}
      </option>
    ));
    const {
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
      <div className="container">
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Transaction Details
        </h1>

        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />

        <form onSubmit={this.onSubmit}>
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

          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>
                  Transaction Type:
                  <select
                    style={{ marginLeft: "5px" }}
                    className="btn btn-block btn-primary dropdown-toggle"
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
            <div className="col">
              <div className="form-group">
                <label>
                  Transaction Status:
                  <select
                    style={{ marginLeft: "20px" }}
                    className="btn btn-block btn-primary dropdown-toggle"
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
          <div className="row">
            <div className="col">
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
            <div className="col">
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

          <div className="form-group btn-block text-center">
            <button type="submit" className="btn btn-block btn-success">
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
  { editTransaction }
)(TransactionProfile);
