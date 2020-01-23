import React from "react";
import { useHistory } from "react-router-dom";
import { teamRegisterFunc } from "../../utils/api";

// Using a custom hook
function useField(defaultValue) {
  const [value, setValue] = React.useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    setValue,
    handleChange
  };
}

const TeamRegistration = props => {
  const history = useHistory();

  // Form Related State Variables
  const teamName = useField("");
  const eventSlug = useField("");

  const firstNameOne = useField("");
  const lastNameOne = useField("");
  const emailOne = useField("");
  const firstNameTwo = useField("");
  const lastNameTwo = useField("");
  const emailTwo = useField("");
  const firstNameThree = useField("");
  const lastNameThree = useField("");
  const emailThree = useField("");

  // componentWillMount alternative

  const handleSubmit = event => {
    event.preventDefault();
    teamRegisterFunc(
      {
        team_name: teamName.value,
        first_name1: firstNameOne.value,
        last_name1: lastNameOne.value,
        email1: emailOne.value,
        first_name2: firstNameTwo.value,
        last_name2: lastNameTwo.value,
        email2: emailTwo.value,
        first_name3: firstNameThree.value,
        last_name3: lastNameThree.value,
        email3: emailThree.value
      },
      eventSlug.value
    )
      .then(res => {
        res.status === 201
          ? history.push("/dashboard")
          : history.push("/login");
      })
      .catch(err => alert("Some error has occured" + err));
  };

  return (
    <section className="team-registration">
      <h1>Team Registration</h1>
      <div className="team_form">
        <div className="upper_info">
          <div className="first_info">
            <h6>Team's Name</h6>
            <br />
            <input
              type="text"
              placeholder="Team's Name"
              value={teamName.value}
              onChange={teamName.handleChange}
              required
            />
          </div>
          <div className="first_info">
            <h6>Event Name</h6>
            <select value={eventSlug.value} onChange={eventSlug.handleChange}>
              <optgroup label="Cultural and Theatre Events">
                <option value="cult-7">Rockathon</option>
                <option value="cult-4">Acoustica</option>
                <option value="cult-3">Footloose</option>
                <option value="cult-5">LaMode</option>
                <option value="cult-1">Cypher</option>
                <option value="cult-9">Till I Collapse</option>
                <option value="cult-8">Pradarshan</option>
                <option value="cult-6">Haq Se RJ</option>
                <option value="cult-2">Mera Naam Joker</option>
              </optgroup>
              <optgroup label="Tech Events">
                <option value="tech-4">TechNova</option>
                <option value="tech-7">Paper Presentation</option>
                <option value="tech-10">BluePrint</option>
                <option value="tech-6">WebDev</option>
                <option value="tech-2">SwigNCode</option>
                <option value="tech-3">Principium</option>
                <option value="tech-1">Battlefield</option>
                <option value="tech-11">DirtRush</option>
                <option value="tech-9">LineFollower</option>
                <option value="tech-8">Encoded</option>
                <option value="tech-5">CTF</option>
                <option value="tech-12">Arduinoob</option>
              </optgroup>
              <optgroup label="Art and Photography Events">
                <option value="art-1">CollArt</option>
                <option value="art-5">Photo Gallery</option>
                <option value="art-2">Photo Exhibition</option>
                <option value="art-4">Picasso</option>
                <option value="art-3">Imagen</option>
              </optgroup>
              <optgroup label="Sports and Gamex Events">
                <option value="sports-1">CSGO</option>
                <option value="sports-6">InterCollege Football</option>
                <option value="sports-3">InterCollege Basketball</option>
                <option value="sports-4">InterCollege Chess</option>
                <option value="sports-5">SuperSix</option>
                <option value="sports-2">FIFA</option>
              </optgroup>
              <optgroup label="Food Events">
                <option value="food-4">Shole Parathe</option>
                <option value="food-3">Maggie Chef</option>
                <option value="food-6">Track Bait</option>
                <option value="food-7">Misc Games</option>
                <option value="food-2">Golgappe King</option>
                <option value="food-5">Stringed Delicacy</option>
              </optgroup>
            </select>
          </div>
        </div>
        <h4>
          Note: It is optional to add Team Members. Maximum size of team is 4
          including the Team Leader.
        </h4>
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
              <th>Email Address</th>
            </tr>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="First Name of Member One"
                    value={firstNameOne.value}
                    onChange={firstNameOne.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Last Name of Member One"
                    value={lastNameOne.value}
                    onChange={lastNameOne.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email of Member One"
                    value={emailOne.value}
                    onChange={emailOne.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="First Name of Member Two"
                    value={firstNameTwo.value}
                    onChange={firstNameTwo.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Last Name of Member Two"
                    value={lastNameTwo.value}
                    onChange={lastNameTwo.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email of Member Two"
                    value={emailTwo.value}
                    onChange={emailTwo.handleChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="First Name of Member Three"
                    value={firstNameThree.value}
                    onChange={firstNameThree.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Last Name of Member Three"
                    value={lastNameThree.value}
                    onChange={lastNameThree.handleChange}
                  />
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email of Member Three"
                    value={emailThree.value}
                    onChange={emailThree.handleChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="register_button" onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
      <button className="go-back-button" onClick={() => props.history.goBack()}>
        Go Back
      </button>
    </section>
  );
};

export default TeamRegistration;
