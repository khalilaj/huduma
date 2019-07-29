import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class UserProfile extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { username, email, password, password2 } = this.state;
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
                <h3 className=" text-primary text-center visible-xs-block, hidden-xs hidden-sm-down ">
                  Edit User Details
                </h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.onChange}
                      value={username}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.onChange}
                      value={email}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.onChange}
                      value={password}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password2"
                      onChange={this.onChange}
                      value={password2}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">
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
