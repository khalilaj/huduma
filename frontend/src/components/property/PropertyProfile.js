import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { addProperty } from "../../actions/property";

import { connect } from "react-redux";
import { deleteProperty } from "../../actions/property";
class PropertyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      location: "",
      completion_year: "",
      id: ""
    };

    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    this.setState({
      name: this.props.property.name,
      location: this.props.property.location,
      completion_year: this.props.property.completion_year,
      id: this.props.property.id
    });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleImageChange = e => {
    this.setState({
      system_photo: e.target.files[0]
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, location, completion_year } = this.state;
    const formData = new FormData();

    formData.append("name", name);
    formData.append("location", location);
    formData.append("completion_year", completion_year);
    this.props.addProperty(formData);

    this.setState({
      name: "",
      location: "",
      completion_year: ""
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const { name, location, completion_year } = this.state;
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            {this.props.property.name}
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            <div className="col">
              <h3 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
                Edit Property Details
              </h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Property Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Property Location</label>
                  <input
                    className="form-control"
                    type="text"
                    name="location"
                    onChange={this.onChange}
                    value={location}
                  />
                </div>
                <div className="form-group">
                  <label>Completion Year</label>
                  <input
                    className="form-control"
                    type="date"
                    name="completion_year"
                    onChange={this.onChange}
                    value={completion_year}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    type="submit"
                    className="btn-block btn mr-2 btn-primary"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            <div className="col row">
              <img
                className="card-img-top"
                src="http://placehold.it/700x400"
                alt="http://placehold.it/700x400"
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(
  null,
  { addProperty, deleteProperty }
)(PropertyProfile);
