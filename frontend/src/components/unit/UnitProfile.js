import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { editUnit } from "../../actions/unit";

class UnitProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      no_of_bed: "",
      no_of_bathroom: "",
      status: "false",
      property: "",
      id: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    const unit = _.find(this.props.unit, function(o) {
      return o.id == id;
    });
    this.setState({
      name: unit.name,
      no_of_bed: unit.no_of_bed,
      no_of_bathroom: unit.no_of_bathroom,
      status: unit.status,
      property: unit.property.id,
      id: unit.id
    });
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  _onStatusChange = e => this.setState({ status: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, no_of_bed, no_of_bathroom, status, property } = this.state;
    const formData = new FormData();
    const id = this.props.match.params.id;
    formData.append("name", name);
    formData.append("no_of_bed", no_of_bed);
    formData.append("no_of_bathroom", no_of_bathroom);
    formData.append("status", status);
    formData.append("property", property);
    this.props.editUnit(formData, id);
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { name, no_of_bed, no_of_bathroom, status } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            Unit Details
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Unit Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Number of Beds</label>
                  <input
                    className="form-control"
                    type="number"
                    name="no_of_bed"
                    onChange={this.onChange}
                    value={no_of_bed}
                  />
                </div>
                <div className="form-group">
                  <label>Number of Bathrooms</label>
                  <input
                    className="form-control"
                    type="number"
                    name="no_of_bathroom"
                    onChange={this.onChange}
                    value={no_of_bathroom}
                  />
                </div>
                <div className="form-group">
                  <label>
                    Occupation Status:
                    <select
                      style={{ marginLeft: "5px" }}
                      className="btn bt-block btn-primary dropdown-toggle"
                      value={status}
                      onChange={this._onStatusChange}
                    >
                      <option className="dropdown-item" value="true">
                        Occupied
                      </option>
                      <option className="dropdown-item" value="false">
                        Vacant
                      </option>
                    </select>
                  </label>
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="btn btn-block btn-success">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  unit: state.unit.unit
});

export default connect(
  mapStateToProps,
  { editUnit }
)(UnitProfile);
