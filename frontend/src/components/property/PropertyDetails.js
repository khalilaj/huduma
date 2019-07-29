import React, { Component } from "react";

import _ from "lodash";

import PropertyReports from "../Reports/PropertyReports";
import TransactionList from "../transaction/TransactionList";

import AgreementList from "../agreement/AgreementList";

import UnitList from "../unit/UnitList";

import PropertyProfile from "./PropertyProfile";

import TenantList from "../tenant/TenantList";

import { connect } from "react-redux";

import UnitForm from "../unit/UnitForm";
import TenantForm from "../tenant/TenantForm";
import TransactionForm from "../transaction/TransactionForm";
import AgreementForm from "../agreement/AgreementForm";

export class PropertyDetails extends Component {
  render() {
    const id = this.props.match.params.id;

    const property = _.find(this.props.property, function(o) {
      return o.id == id;
    });

    const filteredUnit = _.filter(this.props.unit, function(o) {
      return o.property.id == id;
    });
    const filteredAgreement = _.filter(this.props.agreement, function(o) {
      return o.property.id == id;
    });
    const filteredTenant = _.filter(this.props.tenant, function(o) {
      return o.property.id == id;
    });
    const filteredTransaction = _.filter(this.props.transaction, function(o) {
      return o.property.id == id;
    });
    if (this.props.transaction == []) {
      console.log("Loading ...");
    }
    return (
      <div style={{ paddingTop: "10px" }}>
        <ul className="nav  nav-pills mb-3 " id="pills-tab" role="tablist">
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-report-tab"
              data-toggle="pill"
              href="#pills-report"
              role="tab"
              aria-controls="pills-report"
              aria-selected="true"
            >
              Property Reports
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-transaction-tab"
              data-toggle="pill"
              href="#pills-transaction"
              role="tab"
              aria-controls="pills-transaction"
              aria-selected="false"
            >
              Transactions
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-tenant-tab"
              data-toggle="pill"
              href="#pills-tenant"
              role="tab"
              aria-controls="pills-tenants"
              aria-selected="false"
            >
              Agreements
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-agreement-tab"
              data-toggle="pill"
              href="#pills-agreement"
              role="tab"
              aria-controls="pills-agreement"
              aria-selected="false"
            >
              Tenants
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-unit-tab"
              data-toggle="pill"
              href="#pills-unit"
              role="tab"
              aria-controls="pills-unit"
              aria-selected="false"
            >
              Units
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-property-tab"
              data-toggle="pill"
              href="#pills-property"
              role="tab"
              aria-controls="pills-property"
              aria-selected="false"
            >
              Property Details
            </a>
          </li>
        </ul>
        <hr />
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-report"
            role="tabpanel"
            aria-labelledby="pills-report-tab"
          >
            <div className="container">
              <PropertyReports
                propId={this.props.match.params.id}
                transaction={filteredTransaction}
              />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-transaction"
            role="tabpanel"
            aria-labelledby="pills-transaction-tab"
          >
            <div>
              <TransactionForm
                propId={this.props.match.params.id}
                unit={filteredUnit}
                tenant={filteredTenant}
              />
              <TransactionList
                propId={this.props.match.params.id}
                transaction={filteredTransaction}
              />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-tenant"
            role="tabpanel"
            aria-labelledby="pills-tenant-tab"
          >
            <div>
              <AgreementForm
                propId={this.props.match.params.id}
                unit={filteredUnit}
                tenant={filteredTenant}
              />
              <AgreementList
                propId={this.props.match.params.id}
                agreement={filteredAgreement}
              />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-agreement"
            role="tabpanel"
            aria-labelledby="pills-agreement-tab"
          >
            <div>
              <TenantForm
                propId={this.props.match.params.id}
                unit={filteredUnit}
              />
              <TenantList tenant={filteredTenant} />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-unit"
            role="tabpanel"
            aria-labelledby="pills-unit-tab"
          >
            <div>
              <UnitForm propId={this.props.match.params.id} />
              <UnitList unit={filteredUnit} />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-property"
            role="tabpanel"
            aria-labelledby="pills-property-tab"
          >
            <div>
              <PropertyProfile property={property} />
            </div>
          </div>
        </div>
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
  null
)(PropertyDetails);
