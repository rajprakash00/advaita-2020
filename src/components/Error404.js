import React from "react";
import bg from "../img/backgrounds/error-bg.jpg";

const errorPage = {
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
};

const Error = () => {
  return <section style={errorPage} />;
};

export default Error;
