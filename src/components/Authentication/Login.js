import React from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { loginFunc } from "../../utils/api";
import { useAuth } from "./authContext";

const LoginPage = () => {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLogginIn, setIsLogginIn] = React.useState(false);
  const { setAuthTokens } = useAuth();

  const handleSubmit = event => {
    event.preventDefault();
    setIsLogginIn(true);
    loginFunc({ username, password })
      .then(res => {
        setIsLogginIn(false);
        if (res.status === 200) {
          setAuthTokens(res.data.access);
          history.push("/dashboard");
        }
      })
      .catch(err => {
        if (err.response.status === 401) {
          alert(err.response.data.detail);
        }
      });
  };
  return (
    <section className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          <b>Username (not email)</b>
        </label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          name="psw"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <div className="button-group">
          <button type="submit" className="form-button">
            {isLogginIn ? (
              <b>
                <FaSpinner />
              </b>
            ) : (
              <b>Login</b>
            )}
          </button>

          <button
            className="form-button"
            onClick={() => history.push("/register")}
          >
            <b>Register</b>
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
