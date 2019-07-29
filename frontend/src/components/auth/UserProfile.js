import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class UserProfile extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render() {
    return (
      <div>
        <hr className="bg-primary" />
        <div className="container bootstrap snippet">
          <div className="container">
            <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
              User Details{" "}
            </h1>

            <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-lg-4 col-sm-6 mb-4" key={this.props.user.id}>
                <div className="card h-100">
                  <img
                    style={{ height: "200px" }}
                    className="card-img-top"
                    src="http://placehold.it/700x400"
                    alt="http://placehold.it/700x400"
                  />
                  <div className="card-body">
                    <h4 className="card-title"> {this.props.user.username}</h4>
                    <p className="card-text"> {this.props.user.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(UserProfile);
