import React from "react";
import requireAuth from "./auth/requireAuh";
import { connect } from "react-redux";
import * as actions from "../actions";

class Feature extends React.Component {
  componentWillMount() {
    this.props.fetchMessage();
  }
  render() {
    return <div>calculus expertt chamila</div>;
  }
}

export default connect(null, actions)(requireAuth(Feature));
