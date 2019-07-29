import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTenant, deleteTenant } from "../../actions/tenant";
import ReactTable from "react-table";
import "react-table/react-table.css";

export class TenantList extends Component {
  componentDidMount() {
    this.props.getTenant();
  }

  render() {
    const columns = [
      {
        Header: "Firstname",
        accessor: "firstname"
      },
      {
        Header: "Lastname",
        accessor: "lastname"
      },
      {
        Header: "Unit",
        accessor: "unit.name"
      },
      {
        Header: "Phone Number",
        accessor: "phone_number",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Delete",
        accessor: "id",
        Cell: row => (
          <button
            onClick={this.props.deleteTenant.bind(this, row.value)}
            className="btn btn-danger btn-sm"
          >
            {" "}
            Delete
          </button>
        )
      }
    ];
    return (
      <div className="container" style={{ marginBottom: "20px" }}>
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Tenant List
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.tenant}
          filterable
        />
      </div>
    );
  }
}

export default connect(
  null,
  { getTenant, deleteTenant }
)(TenantList);
