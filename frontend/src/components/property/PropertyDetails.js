import React, { Component } from "react";

import PropertyReports from "../Reports/PropertyReports";
import TransactionDashboard from "../transaction/TransactionDashboard";

import AgreementDashboard from "../agreement/AgreementDashboard";

import UnitDashboard from "../unit/UnitDashboard";

import TenantDashboard from "../tenant/TenantDashboard";

import SystemProfile from "./SystemProfile";

export class PropertyDetails extends Component {
  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
        <ul className="nav nav-pills mb-3 " id="pills-tab" role="tablist">
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
              Tenants
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
              Agreements
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
              <PropertyReports />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-transaction"
            role="tabpanel"
            aria-labelledby="pills-transaction-tab"
          >
            <div>
              <TransactionDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-tenant"
            role="tabpanel"
            aria-labelledby="pills-tenant-tab"
          >
            <div>
              <TenantDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-agreement"
            role="tabpanel"
            aria-labelledby="pills-agreement-tab"
          >
            <div>
              <AgreementDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-unit"
            role="tabpanel"
            aria-labelledby="pills-unit-tab"
          >
            <div>
              <UnitDashboard />
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-property"
            role="tabpanel"
            aria-labelledby="pills-property-tab"
          >
            <div>
              <SystemProfile />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
