import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  Legend,
  PieChart,
  Pie,
  Tooltip,
  RadialBarChart,
  RadialBar,
  LineChart,
  Line,
  CartesianGrid
} from "recharts";

import { connect } from "react-redux";
import PropTypes from "prop-types";

export class PropertyReports extends PureComponent {
  static propTypes = {
    transaction: PropTypes.array.isRequired
  };

  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    return (
      <div style={{ marginTop: "10px" }}>
        <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
          Property Reports{" "}
        </h1>
        <hr
          className="bg-primary"
          style={{ borderColor: "50px solid", marginBottom: "10px" }}
        />
        <div className="conatiner row mt-2" style={{ marginBottom: "10px" }}>
          <div className="col conatiner " style={{ marginTop: "25px" }}>
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Transaction Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <BarChart
              width={1000}
              height={400}
              data={this.props.transaction}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount_due" fill="#8884d8" />
              <Bar dataKey="amount_paid" fill="#a83232" />
              <Bar dataKey="transaction_type" fill="#2377cc" />
              <Bar dataKey="transaction_status" fill="#decd20" />
            </BarChart>
          </div>

          <div className="col conatiner" style={{ marginTop: "25px" }}>
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Transaction Stacked Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <BarChart
              width={1000}
              height={400}
              data={this.props.transaction}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount_due" fill="#8884d8" stackId="a" />
              <Bar dataKey="amount_paid" fill="#a83232" stackId="a" />
              <Bar dataKey="transaction_type" fill="#2377cc" stackId="a" />
              <Bar dataKey="transaction_status" fill="#decd20" stackId="a" />
            </BarChart>
          </div>
        </div>
        <div className="conatiner row mt-2">
          <div
            className="col"
            style={{ marginTop: "25px", marginBottom: "25px" }}
          >
            <h4 className=" text-primary visible-xs-block, hidden-xs hidden-sm-down ">
              Transaction Stacked Bar Graph{" "}
            </h4>
            <hr className="primary" style={{ marginBottom: "10px" }} />
            <LineChart
              width={1000}
              height={400}
              data={this.props.transaction}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="unit" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount_due"
                stroke="#2377cc"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="amount_paid"
                stroke="#2377cc"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="transaction_type"
                stroke="#a83232"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="transaction_status"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  transaction: state.transaction.transaction
});

export default connect(mapStateToProps)(PropertyReports);
