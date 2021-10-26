import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { compose } from "redux";
class Signup extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );

  //   renderError({error,touched}){
  //       if(error && touched){
  //     return (
  //         <div><span style={{color:'red'}}>{error}</span></div>
  //     );
  //   }
  // }
  onSubmit = (formprops) => {
    this.props.signupUser(formprops, () => {
      this.props.histort.push("/feature");
    });
  };
  renderAuthError() {
    if (this.props.error) {
      return <div style={{ color: "red" }}>{this.props.error}</div>;
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)} class="ui form">
        <div class="field">
          <Field label="email" type="email" name="email" component={this.renderField} placeholder="email" />
        </div>
        <div class="field">
          <Field type="password" name="password" label="password" component={this.renderField} placeholder="password" />
        </div>

        <div class="field">
          <label> Confirm Password</label>
          <Field type="password" name="confirmpassword" component={this.renderField} placeholder="confirm password" />
        </div>

        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return { error: state.auth.errorMessage };
};
const validate = (formprops) => {
  const errors = {};
  // const errorMessages =
  // { email: 'enter your email',
  //   password: 'enter your password',
  //   confirmpassword: 'enter your password confirmation'
  // };

  // Object.keys(formprops).forEach((field) => {
  //   if (!formprops[field]) {
  //     errors[field] = '${field} is required';
  //   }
  // });

  if (!formprops.email) {
    errors.email = "enter  an email";
  }

  // if(formprops.pawssword !== formprops.confirmpassword){
  //     errors.confirmpassword = "passwords don't match"
  // }
  if (formprops.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formprops.email)) {
    errors.email = "enter a valid email";
  }
  return errors;
};

export default compose(connect(mapStateToProps, actions), reduxForm({ form: "sign up", validate }))(Signup);
