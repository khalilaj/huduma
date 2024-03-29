import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getUnit, deleteUnit } from "../../actions/unit";
import Moment from "react-moment";

import ReactTable from "react-table";
import "react-table/react-table.css";
import { Link } from "react-router-dom";

export class UnitList extends Component {
  componentDidMount() {
    this.props.getUnit();
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
        Header: "Unit Name",
        accessor: "name",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "No of bedrooms",
        accessor: "no_of_bed",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "No of bathrooms",
        accessor: "no_of_bathroom",
        filterMethod: (filter, row) => row[filter.id].includes(filter.value)
      },
      {
        Header: "View",
        accessor: "id",
        Cell: row => (
          <Link to={`/unit/${row.value}/`} className="btn btn-success btn-sm">
            {" "}
            View More
          </Link>
        )
      },
      {
        Header: "Delete",
        accessor: "id",
        Cell: row => (
          <button
            onClick={this.props.deleteUnit.bind(this, row.value)}
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
          Unit List
        </h1>
        <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
        <ReactTable
          defaultPageSize={5}
          className="-striped -highlight"
          columns={columns}
          data={this.props.unit}
          filterable
        />
      </div>
    );
  }
}

export default connect(
  null,
  { getUnit, deleteUnit }
)(UnitList);
