import React from "react";
import { useHistory } from "react-router-dom";
import { fetchRegistrationFunc } from "../../utils/api";

const TeamRegistration = () => {
  const history = useHistory();
  const [teamDetails, setTeamDetails] = React.useState([]);
  React.useEffect(() => {
    fetchRegistrationFunc()
      .then(res => {
        setTeamDetails(res.data.details.reg);
        console.log(teamDetails);
      })
      .catch(() => {
        history.push("/login");
      });
  }, []);
  return (
    <section className="team-registration">
      <h1>Team Registration</h1>
      <div className="team_form">
        <div className="upper_info">
          <div className="first_info">
            <h6>Team's Name</h6>
            <br />
            <input type="text"></input>
          </div>
          <div className="first_info">
            <h6>Event Name</h6>
            <br />
            <input type="text"></input>
          </div>
        </div>
        <div className="new_table">
          <table
            style={{
              width: "80%",
              marginTop: "50px"
            }}
          >
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Adress</th>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="email"></input>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="email"></input>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="text"></input>
              </td>
              <td>
                {" "}
                <input type="email"></input>
              </td>
            </tr>
          </table>
        </div>
        <button className="register_button">SUBMIT</button>
      </div>
      {/*teamDetails.map(item => {
        return <li>{JSON.stringify(item)}</li>;
      })*/}
    </section>
  );
};

export default TeamRegistration;
