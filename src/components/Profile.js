import React from "react";
import { getProfile, updateProfile } from "../utils/apiCall";
import { GlobalContext } from "../context/GlobalContext";

export default function Profile() {
  const { updateUser } = React.useContext(GlobalContext);
  const [userInfo, setUserInfo] = React.useState({});
  React.useEffect(() => {
    getProfile().then(res => {
      updateUser(res.data.username);
      console.log(res.data);
      setUserInfo(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <p>Name: {`${userInfo["first_name"]} ${userInfo["last_name"]}`}</p>
        <p>ID: {userInfo.id}</p>
        <p>Email: {userInfo.email}</p>
      </div>
      <form></form>
    </>
  );
}