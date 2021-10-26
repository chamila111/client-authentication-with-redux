import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Header extends Component {
  renderHeader() {
    if (this.props.authenticated) {
      return (
        <div className="right menu">
          <Link to="signout" className="ui item">
            Sign out
          </Link>
        </div>
      );
    }
    return (
      <>
        <Link to="/signin" className="item">
          Sign in
        </Link>
        <Link to="/signup" className="item">
          Sign up
        </Link>
        <Link to="/feature" className="item">
          Feature
        </Link>
      </>
    );
  }

  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" clasName="active item">
          Welcome
        </Link>
        {this.renderHeader()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};
export default connect(mapStateToProps)(Header);
