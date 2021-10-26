import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import SignIn from "./components/auth/SignIn";
import Signup from "./components/auth/Signup";
import Signout from "./components/auth/Signout";
import Feature from "./components/Feature";
import Welcome from "./components/Welcome";
import reducers from "./reducers";
import { AUTH_USER } from "./actions/types";
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const token = localStorage.getItem("token");
if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={Signout} />
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
