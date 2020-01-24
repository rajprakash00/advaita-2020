import React from "react";
import { useHistory } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import {
  getProfileFunc,
  fetchRegistrationFunc,
  logoutFunc
} from "../../utils/api";

const Dashboard = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = React.useState(true);
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
        setUserRegistration(res.data.details.reg);
        setIsLoading(false);
      })
      .catch(() => {
        history.push("/login");
      });
  }, []);

  const handleLogout = () => {
    logoutFunc().then(() => {
      history.push("/");
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="fetching-container">
          <div className="loading">
            <FaSpinner />
          </div>
        </div>
      ) : null}
      <section className="dashboard">
        <h1>Welcome, {data.first_name}</h1>
        <div className="dashboard_container">
          <div className="team-details">
            <h3>Profile</h3>
            <div className="content" style={{ marginTop: "20px" }}>
              <h5>username: {data.username}</h5>
              <h5>name: {`${data.first_name} ${data.last_name}`}</h5>
              <h5>email: {data.email}</h5>
              {/*<Link to="/team-register">Register for Event</Link>*/}
              <button
                className="team_register_but"
                onClick={() => history.push("/team-register")}
              >
                Register for Event
              </button>
              <button className="team_register_but" onClick={handleLogout}>
                Logout
              </button>
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
                <tbody>
                  <tr>
                    <th>No.</th>
                    <th>Team Name</th>
                    <th>Event Name</th>
                    <th>Payment Status</th>
                  </tr>
                  {userRegistration.map((event, i) => {
                    return (
                      <tr key={event.id}>
                        <td>{i + 1}</td>
                        <td>{event.team_name}</td>
                        <td>{event.event_name}</td>
                        <td>
                          {event.payed ? (
                            <button disabled>Paid</button>
                          ) : (
                            <button disabled>Pay Now</button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
