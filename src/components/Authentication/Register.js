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
    console.log({
      username: username.value,
      password: password.value,
      password_confirm: confirmPassword.value,
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value
    });
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
    <section className="register-page">
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label>Username</label>
        <input
          name="login"
          value={username.value}
          onChange={username.handleChange}
        />
        <label>Email</label>
        <input name="email" value={email.value} onChange={email.handleChange} />
        <label>First Name</label>
        <input
          name="first_name"
          value={firstName.value}
          onChange={firstName.handleChange}
        />
        <label>Last Name</label>
        <input
          name="Last_name"
          value={lastName.value}
          onChange={lastName.handleChange}
        />
        <label>Password</label>
        <input
          name="password"
          value={password.value}
          onChange={password.handleChange}
        />
        <label>Confirm Password</label>
        <input
          name="confirm_password"
          value={confirmPassword.value}
          onChange={confirmPassword.handleChange}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default RegisterPage;
