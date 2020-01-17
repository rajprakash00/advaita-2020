import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useHistory } from "react-router-dom";

import * as authFunc from "../utils/apiCall";

export default function Login() {
  const { toggleAuth } = React.useContext(GlobalContext);
  const history = useHistory();
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = event => {
    event.preventDefault();
    authFunc
      .login({
        login,
        password
      })
      .then(() => {
        toggleAuth(true);
        history.push("/profile");
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    </*section className="login-page"*/>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="login"
          value={login}
          onChange={e => setLogin(e.target.value)}
        />
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}