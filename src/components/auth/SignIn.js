import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from "../../actions";
class SignIn extends Component {
  handleFormSubmit = (formprops) => {
    console.log(formprops);
    this.props.signinUser(formprops, () => {
      this.props.history.push("/feature");
    });
  };
  handleError() {
    if (this.props.errorMessage) {
      return (
        <div className="ui error message">
          <strong>Oops!</strong>
          {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)} className="ui form">
        <div className="field">
          <label>Email</label>
          <Field component="input" type="email" name="email" />
        </div>
        <div className="field">
          <label>password</label>
          <Field name="password" type="password" component="input" />
        </div>
        {this.handleError()}
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.auth.errorMessage,
  };
};
export default compose(connect(mapStateToProps, actions), reduxForm({ form: "sign in" }))(SignIn);
