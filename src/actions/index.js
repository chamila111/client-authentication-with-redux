import axios from "axios";
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./types";
const ROOT_URL = "http://localhost:3090";
export function signinUser(formProps, callback) {
  return (dispatch) => {
    axios
      .post(`${ROOT_URL}/signin`, formProps)
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", response.data.token);
        callback();
      })
      .catch(() => {
        dispatch(authError("invalid sign in information"));
      });
  };
}
export function signupUser(formprops, callback) {
  return (dispatch) => {
    axios
      .post("http://localhost:3090/signup", formprops)
      .then((response) => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem("token", response.data.token);
        callback();
      })
      .catch((error) => {
        if (error.response) {
          dispatch(authError(error.response.data.error));
        }
      });
  };
}
export function signOut() {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
}
export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error,
  };
}
export function fetchMessage() {
  return (dispatch) => {
    axios
      .get(ROOT_URL, {
        headers: { authorization: localStorage.getItem("token") },
      })
      .then((response) => console.log(response));
  };
}
