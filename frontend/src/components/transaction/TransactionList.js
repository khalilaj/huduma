import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTransaction, deleteTransaction } from "../../actions/transaction";
import Moment from "react-moment";

import ReactTable from "react-table";
import "react-table/react-table.css";

export class TransactionList extends Component {
  componentDidMount() {
    this.props.getTransaction();
  }

  render() {
    const columns = [
      {
        Header: "Date Due",
        accessor: "date_due",
        Cell: row => <Moment date={row.value} />
      },
      {
        Header: "Property",
        accessor: "property",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Unit",
        accessor: "unit",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Tenant",
        accessor: "tenant",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "Amount Due",
        accessor: "amount_due",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },

      {
        Header: "Delete",
        accessor: "id",
        Cell: row => (
          <button
            onClick={this.props.deleteTransaction.bind(this, row.value)}
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
          Transactions List
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.transaction}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { getTransaction, deleteTransaction }
)(TransactionList);
