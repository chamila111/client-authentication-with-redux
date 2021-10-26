import React, { Component } from "react";
import { connect } from "react-redux";

export default function (ChildComponent) {
  class ComposedComponent extends Component {
    componentWillMount() {
      this.shouldNavigateAway();
    }
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  const mapStateToProps = (state) => {
    return { auth: state.auth.authenticated };
  };
  return connect(mapStateToProps)(ComposedComponent);
}
