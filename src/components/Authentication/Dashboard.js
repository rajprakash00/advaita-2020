import React from "react";
import { useHistory } from "react-router-dom";
import { getProfileFunc, fetchRegistrationFunc } from "../../utils/api";

const Dashboard = () => {
  const history = useHistory();
  const [data, setData] = React.useState({});
  const [userRegistration, setUserRegistration] = React.useState([]);
  React.useEffect(() => {
    getProfileFunc()
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        if (err.status === 401) {
          history.push("/login");
        }
      });

    fetchRegistrationFunc()
      .then(res => {
        setUserRegistration(res.data);
        console.log(userRegistration);
      })
      .catch(() => {
        history.push("/login");
      });
  }, []);
  return (
    <section className="dashboard">
      <h1>Hi Dashboard</h1>
      {JSON.stringify(data)}
      {JSON.stringify(userRegistration)}
    </section>
  );
};

export default Dashboard;
