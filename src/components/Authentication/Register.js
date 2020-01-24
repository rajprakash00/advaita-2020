import React from "react";
import { useHistory } from "react-router-dom";
import { registerFunc } from "../../utils/api";

// Using a custom hook
function useField(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    setValue,
    handleChange
  };
}

const RegisterPage = () => {
  const history = useHistory();

  const username = useField("");
  const password = useField("");
  const confirmPassword = useField("");
  const firstName = useField("");
  const lastName = useField("");
  const email = useField("");

  const handleSubmit = e => {
    e.preventDefault();
    registerFunc({
      username: username.value,
      password: password.value,
      password_confirm: confirmPassword.value,
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value
    }).then(() => {
      history.push("/login");
    });
  };
  return (
    <section className="login-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usrname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="username"
          value={username.value}
          onChange={username.handleChange}
          required
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder=""
          name="email"
          value={email.value}
          onChange={email.handleChange}
          required
        />
        <label>
          <b>First Name</b>
        </label>
        <input
          name="first_name"
          type="text"
          placeholder=""
          value={firstName.value}
          onChange={firstName.handleChange}
          required
        />
        <label>
          <b>Last Name</b>
        </label>
        <input
          name="Last_name"
          type="text"
          placeholder=""
          value={lastName.value}
          onChange={lastName.handleChange}
          required
        />
        <label>
          <b>Password</b>
        </label>
        <input
          name="password"
          type="password"
          placeholder=""
          value={password.value}
          onChange={password.handleChange}
          required
        />
        <label>
          <b>Confirm Password</b>
        </label>
        <input
          name="confirm_password"
          type="password"
          placeholder=""
          value={confirmPassword.value}
          onChange={confirmPassword.handleChange}
          required
        />
        <div className="button-group">
          <button type="submit" className="form-button">
            <b>Sign Up</b>
          </button>
          <button
            className="form-button"
            onClick={() => history.push("/login")}
          >
            <b>Have an account? Login!</b>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterPage;
