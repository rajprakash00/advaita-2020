import axios from "axios";
import Cookie from "js-cookie";
import * as API from "./config";

axios.defaults.baseURL = API.URL;

export const login = ({ login, password }) => {
  return axios
    .post(
      API.LOGIN,
      {
        login,
        password
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      return res.data;
    });
};

export const register = user =>
  axios.post(API.REGISTER, JSON.stringify(user), {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": Cookie.get("csrftoken")
    }
  });

export const getProfile = () =>
  axios.get(API.PROFILE, {
    headers: {
      "X-CSRFToken": Cookie.get("csrftoken")
    },
    withCredentials: true
  });

export const updateProfile = user =>
  axios.post(API.PROFILE, JSON.stringify(user), {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": Cookie.get("csrftoken")
    }
  });

export const logout = () =>
  axios.post(
    API.LOGOUT,
    {},
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": Cookie.get("csrftoken")
      }
    }
  );