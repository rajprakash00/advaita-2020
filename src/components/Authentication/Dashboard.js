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
        //console.log(userRegistration);
      })
      .catch(() => {
        history.push("/login");
      });
  }, []);
  console.log(Object.values(userRegistration)[0]);
  return (
    <section className="dashboard">
      <h1>Welcome {data.first_name}</h1>
      <div className="dashboard_container">
        <div className="team-details">
          <h3>Your team</h3>
          <div className="content" style={{ marginTop: "20px" }}>
            <h5>Prakhar</h5>
            <h5>Prakhar</h5>
            <h5>Prakhar</h5>
            <h5>Prakhar</h5>
          </div>
        </div>
        <div className="team_events" style={{ width: "70%" }}>
          <h3>Registered Events</h3>
          <div className="new_table">
            <table
              style={{
                width: "80%",
                marginTop: "50px"
              }}
            >
              <tr>
                <th>Sl</th>
                <th>Event Name</th>
                <th>Payment Date</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Haq se Joker</td>
                <td>10.01.2020</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Arduinoob</td>
                <td>10.01.2020</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/*JSON.stringify(data)/*/}
      {/*JSON.stringify(Object.values(userRegistration)[0])*/}
    </section>
  );
};

export default Dashboard;
