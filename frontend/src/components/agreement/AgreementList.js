import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAgreement, deleteAgreement } from "../../actions/agreement";
import Moment from "react-moment";

import ReactTable from "react-table";
import "react-table/react-table.css";

export class AgreementList extends Component {
  componentDidMount() {
    this.props.getAgreement();
  }

  render() {
    const columns = [
      {
        Header: "Created At",
        accessor: "created_at",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Updated On",
        accessor: "updated_on",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Agrement Tittle",
        accessor: "tittle",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: " Unit Name",
        accessor: "unit.name"
      },
      {
        Header: "Delete",
        accessor: "id",
        Cell: row => (
          <button
            onClick={this.props.deleteAgreement.bind(this, row.value)}
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
          Tenant Agreements List
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.agreement}
          filterable
        />
      </div>
    );
  }
}

export default connect(
  null,
  { getAgreement, deleteAgreement }
)(AgreementList);
