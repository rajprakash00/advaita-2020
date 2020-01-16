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
      {teamDetails.map(item => {
        return <li>{JSON.stringify(item)}</li>;
      })}
    </section>
  );
};

export default TeamRegistration;
