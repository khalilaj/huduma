import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class PropertyProfile extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
            {this.props.property.name}
          </h1>

          <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
          <div className="row" style={{ marginTop: "50px" }}>
            <div
              className="col-lg-4 col-sm-6 mb-4"
              key={this.props.property.id}
            >
              <div className="card h-100">
                <Link to="/property/">
                  <img
                    style={{ height: "200px" }}
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt="http://placehold.it/700x400"
                  />
                </Link>
                <div className="card-body">
                  <h4 className="card-title">
                    <Link to="/property/">{this.props.property.name}</Link>
                  </h4>
                  <p className="card-text">{this.props.property.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PropertyProfile;
