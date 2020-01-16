import React from "react";
import { useHistory } from "react-router-dom";
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
        <label>Username</label>
        <input
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default LoginPage;
