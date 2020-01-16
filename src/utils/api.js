import axios from "axios";
import * as API from "./config";

axios.defaults.baseURL = API.URL;

export const loginFunc = ({ username, password }) => {
  return axios
    .post(
      API.LOGIN,
      {
        username,
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
      if (res.status === 200) {
        sessionStorage.setItem("jwtToken", res.data.access);
      }
      return res;
    })
    .catch(err => console.log(err));
};

export const registerFunc = user => {
  return axios
    .post(API.REGISTER, JSON.stringify(user), {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const getProfileFunc = () => {
  if (sessionStorage.getItem("jwtToken") !== null) {
    return axios
      .get(API.PROFILE, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
        }
      })
      .then(res => res)
      .catch(err => console.log(err));
  } else {
    return Promise.reject({ status: 401 });
  }
};

export const fetchRegistrationFunc = () => {
  if (sessionStorage.getItem("jwtToken") !== null) {
    return axios
      .get(API.FETCH_REGISTRATION, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
        }
      })
      .then(res => res)
      .catch(err => console.log(err));
  } else {
    return Promise.reject({ status: 401 });
  }
};
