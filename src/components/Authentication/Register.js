import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
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

  const [captchaVerified, setCaptchaVerified] = React.useState(false);

  const username = useField();
  const password = useField();
  const confirmPassword = useField();
  const firstName = useField();
  const lastName = useField();
  const email = useField();
  const mobileNo = useField();
  const city = useField();
  const gender = useField("male");
  const college = useField();

  const handleSubmit = e => {
    e.preventDefault();
    captchaVerified
      ? registerFunc({
          username: username.value,
          password: password.value,
          password_confirm: confirmPassword.value,
          first_name: firstName.value,
          last_name: lastName.value,
          email: email.value,
          mobile_no: mobileNo.value,
          city: city.value,
          gender: gender.value,
          college: college.value
        })
          .then(res => {
            if (res.status === 201) {
              alert(
                "Registeration Successful, please check your spam for registration verification link."
              );
              history.push("/login");
            } else if (res.status === 400) {
              alert(
                Object.keys(res.data)
                  .map(
                    x =>
                      `${x}: ${JSON.stringify(Object.values(res.data[x])[0])}`
                  )
                  .join("\n")
              );
            }
          })
          .catch(err => {
            alert(
              "Some error occured while registering, please try again later."
            );
          })
      : alert("Invalid Captcha!");
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
          <b>Gender</b>
        </label>
        <div className="gender-select">
          <div>
            <label>Male</label>
            <input
              type="radio"
              value="male"
              checked={gender.value === "male"}
              onChange={gender.handleChange}
            />
          </div>
          <div>
            <label>Female</label>
            <input
              type="radio"
              value="female"
              checked={gender.value === "female"}
              onChange={gender.handleChange}
            />
          </div>
        </div>
        <label>
          <b>Mobile Number</b>
        </label>
        <input
          pattern="(?=.*\d).{,10}"
          name="mobile_number"
          type="number"
          placeholder=""
          value={mobileNo.value}
          onChange={mobileNo.handleChange}
          required
        />
        <label>
          <b>City</b>
        </label>
        <input
          name="city"
          type="text"
          placeholder=""
          value={city.value}
          onChange={city.handleChange}
          required
        />
        <label>
          <b>College</b>
        </label>
        <input
          name="college"
          type="text"
          placeholder=""
          value={college.value}
          onChange={college.handleChange}
          required
        />
        <label>
          <b>Password</b>
        </label>
        <input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          name="password"
          type="password"
          placeholder=""
          value={password.value}
          onChange={password.handleChange}
          required
          title="Your password must be at least 8 characters long, contain at
            least one uppercase, one lowercase, one special character and one number"
        />
        <label>
          <b>Confirm Password</b>
        </label>
        <input
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          name="confirm_password"
          type="password"
          placeholder=""
          value={confirmPassword.value}
          onChange={confirmPassword.handleChange}
          required
        />
        <div style={{ margin: "0 auto", marginBottom: "20px" }}>
          <ReCAPTCHA
            sitekey="6Lc609IUAAAAAJJJPEjc9-8ITfBf0KAxQ7WxT8gV"
            onChange={() => {
              setCaptchaVerified(true);
            }}
          />
        </div>
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
