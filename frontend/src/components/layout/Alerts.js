import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message)
        alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors)
        alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }

    if (message !== prevProps.message) {
      if (message.addAgreement) alert.success(message.addAgreement);
      if (message.addUnit) alert.success(message.addUnit);
      if (message.addTransaction) alert.success(message.addTransaction);
      if (message.addTenant) alert.success(message.addTenant);
      if (message.addProperty) alert.success(message.addProperty);
      if (message.editAgreement) alert.success(message.editAgreement);
      if (message.editProperty) alert.success(message.editProperty);
      if (message.editTenant) alert.success(message.editTenant);
      if (message.editUnit) alert.success(message.editUnit);
      if (message.editTransaction) alert.success(message.editTransaction);
      if (message.deleteAgreement) alert.success(message.deleteAgreement);
      if (message.deleteUnit) alert.success(message.deleteUnit);
      if (message.deleteTransaction) alert.success(message.deleteTransaction);
      if (message.deleteTenant) alert.success(message.deleteTenant);
      if (message.deleteProperty) alert.success(message.deleteProperty);
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
