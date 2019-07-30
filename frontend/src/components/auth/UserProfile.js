import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class UserProfile extends Component {
  state = {
    username: "",
    email: ""
  };

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email } = this.props.user;
    return (
      <div>
        <div className="container bootstrap snippet">
          <div className="container">
            <h1 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
              User Details{" "}
            </h1>

            <hr className="bg-primary" style={{ borderColor: "50px solid" }} />
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onChange}
                      value={username}
                      disabled
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      disabled
                      onChange={this.onChange}
                      value={email}
                      required
                    />
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
