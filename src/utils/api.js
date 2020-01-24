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
      return res;
    })
    .catch(err => console.log(err));
};

export const logoutFunc = () => {
  return axios
    .post(
      API.LOGOUT,
      {},
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
        }
      }
    )
    .then(res => {
      if (res.status === 200) {
        sessionStorage.removeItem("jwtToken");
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

export const emailVerifyFunc = params => {
  return axios
    .post(
      API.EMAIL_VERIFY + params,
      {},
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => res)
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

export const teamRegisterFunc = (data, slug) => {
  console.log(`${API.TEAM_REGISTER}${slug}`);
  if (sessionStorage.getItem("jwtToken") !== null) {
    return axios
      .post(`${API.TEAM_REGISTER}${slug}`, data, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwtToken")}`
        }
      })
      .then(res => res)
      .catch(err => console.log(err));
  }
};
