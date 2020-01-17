import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { logout } from "../utils/apiCall";

export default function Signout() {
  const history = useHistory();
  const { toggleAuth } = React.useContext(GlobalContext);
  React.useEffect(() => {
    logout()
      .then(() => {
        toggleAuth(false);
        history.push("/login");
      })
      .catch();
  }, []);
  return (
    <div>
      <h1>Logout Successful. Redirecting.</h1>
    </div>
  );
}