import React from "react";
import bg from "../img/backgrounds/error-bg.jpg";

const errorPage = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundAttachment: "fixed"
};

const buttonStyle = {
  backgroundColor: "transparent",
  outline: "none",
  border: "none",
  color: "lightblue",
  fontSize: "1.5rem",
  position: "absolute",
  textDecoration: "underline",
  cursor: "pointer",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const Error = props => {
  return (
    <section style={errorPage}>
      <button style={buttonStyle} onClick={() => props.history.goBack()}>
        go back to previous page?
      </button>
    </section>
  );
};

export default Error;
