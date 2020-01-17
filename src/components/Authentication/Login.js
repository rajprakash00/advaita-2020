import React from "react";
import { useHistory, Link } from "react-router-dom";
import { loginFunc } from "../../utils/api";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSubmit = event => {
    event.preventDefault();
    if (username.length === 0) {
      alert("");
    }
    loginFunc({ username, password })
      .then(res => {
        if (res.status === 200) {
          history.push("/dashboard");
        }
      })
      .catch(() => alert("Some error has occured, please try again later."));
  };
  return (
    <section className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label for="username">
          <b>Username</b>
        </label>
        <input
          name="username"
          placeholder=""
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="psw"
          placeholder=""
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          class="registerbtn"
          style={{ backgroundColor: "#00a651" }}
        >
          <b>Log In</b>
        </button>
      </form>
      <Link to="/register">Register</Link>
    </section>
  );
};

export default LoginPage;
