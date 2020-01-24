import React from "react";
import { emailVerifyFunc } from "../../utils/api";

const VerifyEmail = props => {
  const [status, setStatus] = React.useState("");
  React.useEffect(() => {
    const params = props.location.search;
    emailVerifyFunc(params)
      .then(res => {
        if (res.status === 200) {
          setStatus(
            "Email Verified Successfully, Redirecting you to login page"
          );
          setTimeout(() => {
            props.history.push("/login");
          }, 4000);
        }
      })
      .catch(() => setStatus("Invalid Request"));
  }, []);
  return (
    <section className="login-page">
      <div>{status}</div>
    </section>
  );
};

export default VerifyEmail;
