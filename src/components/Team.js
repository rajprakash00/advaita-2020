import React, { Component } from "react";
import TeamCard from "./TeamCard";

export default class Team extends Component {
  render() {
    return (
      <section className="team-page">
        <h1>The Team</h1>
        <h1 className="team-heading">Cultural</h1>
        <div className="team-container">
          <TeamCard
            name="Naman Abrol"
            des="Cult Head"
            img="27.png"
            number="7006176006"
            fb="https://www.facebook.com/nabrol3"
            tweet="https://twitter.com/namanabrol4?s=08"
            insta="https://instagram.com/monkfromnorth?igshid=6vtzuh56snxe"
          />
          <TeamCard
            name="Sanket Panda"
            des="Cult Head"
            img="28.png"
            number="8333882613"
            fb="https://www.facebook.com/sanket.panda.1257"
            tweet="https://twitter.com/SanketPanda10?s=0"
            insta="https://www.instagram.com/sankepa7/"
          />

          <TeamCard
            name="Sumeet Sagar Lenka"
            des="Cultural Head"
            img="16.png"
            number="7008421762"
            insta="https://www.instagram.com/sumeet_3010/"
          />
        </div>

        <h1 className="team-heading">Tech</h1>
        <div className="team-container">
          <TeamCard
            name="Ankit Gupta"
            des="Tech Head"
            img="8.png"
            number="7656814356"
            tweet="https://twitter.com/Ankit9437"
            insta="https://www.instagram.com/ankit_xd/"
          />
          <TeamCard
            name="Shubham Sharma"
            des="Tech Head"
            img="20.png"
            number="7978279452"
            fb="https://www.facebook.com/shubhsharma2708"
            tweet="https://twitter.com/i_m_shubham27"
            insta="https://www.instagram.com/i_m_shubham27/"
          />
        </div>
        <h1 className="team-heading">Treasurer</h1>
        <div className="team-container">
          <TeamCard
            name="Prachi Pallavi"
            des="Audit Head"
            img="10.png"
            number="8917256776"
            fb="https://www.facebook.com/prachi.pallavi.37"
            insta="https://instagram.com/_the_bhukkad_"
          />
          <TeamCard
            name="Ashutosh Gupta"
            des="Audit Head"
            img="26.png"
            number="7982138079"
            fb="https://www.facebook.com/profile.php?id=100006917940556"
            insta="https://www.instagram.com/_ashu._gupta_/"
          />
        </div>
        <h1 className="team-heading">Web Dev Team</h1>
        <div className="team-container">
          <TeamCard
            name="Pranshu Kumbhare"
            des="Website Designer"
            img="29.png"
            number="9424447912"
            fb="https://m.facebook.com/pranshu.kumbhare.9"
            insta="https://www.instagram.com/kumbhare_pranshu/"
          />
          <TeamCard
            name="Vaibhav Kandwal"
            des="Frontend Developer"
            img="32.png"
            number="7013503956"
            fb="https://www.facebook.com/vaibhavkandwal07"
            tweet="https://twitter.com/vaibhav_kandwal/"
            insta="https://www.instagram.com/vaibhavkandwal/"
          />

          <TeamCard
            name="Raj Prakash Sahoo"
            des="Frontend Developer"
            img="31.png"
            number="7064223460"
            insta="https://www.instagram.com/rajprakash__00/"
            tweet="https://www.twitter.com/rajprakashsahoo/"
          />
          <TeamCard
            name="Prakhar Kaushik"
            des="Backend Developer"
            img="30.png"
            number="8077749161"
            insta="https://www.instagram.com/prakhar.kaush/"
            tweet="https://twitter.com/me_prakhar"
          />
        </div>

        <h1 className="team-heading">Food </h1>
        <div className="team-container">
          <TeamCard
            name="Siddarth Pattnaik"
            des="Food  Head"
            img="1.png"
            number="8249498265"
            fb="https://www.facebook.com/siddharth.pattnaik.50"
            tweet="https://mobile.twitter.com/Siddarthpattna1"
            insta="https://www.instagram.com/_siddharth.pattnaik_/?hl=en"
          />
          <TeamCard
            name="Kaushik Gupta"
            des="Food  Head"
            img="24.png"
            number="8763043006"
            insta="https://www.instagram.com/kaushik_gupta07/"
          />
        </div>
        <h1 className="team-heading">Public Relation</h1>
        <div className="team-container">
          <TeamCard
            name="Nishant"
            des="Public Relation Head"
            img="2.png"
            number="7013504207"
            fb="https://www.facebook.com/profile.php?id=100012549433148"
            tweet="https://twitter.com/nishant_has"
            insta="https://www.instagram.com/nishant_has/"
          />
          <TeamCard
            name="Naman Gupta"
            des="Public Relation Head"
            img="9.png"
            number="8309968104"
            fb="https://www.facebook.com/naman030599"
            insta="https://www.instagram.com/naman__guptaa/"
          />
          <TeamCard
            name="Sunidhi Singh"
            des="Public Relations Head"
            img="22.png"
            number="7479924956"
            insta="https://www.instagram.com/sunidhisinghh/"
          />
        </div>
        <h1 className="team-heading">Discipline Committee</h1>
        <div className="team-container">
          <TeamCard
            name="Rajarshee Basu"
            des="Discipline Committee Head"
            img="3.png"
            number="8240624256"
            fb="https://www.facebook.com/rajarshee1234"
            tweet="https://twitter.com/basu_rajarshee"
          />
        </div>
        <h1 className="team-heading">Publicity</h1>
        <div className="team-container">
          <TeamCard
            name="Swayam Dash"
            des="Publicity Head"
            img="4.png"
            number="8637283288"
            fb="https://m.facebook.com/bindash.swayam"
            tweet="https://mobile.twitter.com/swayamdash123"
            insta="https://www.instagram.com/bindash.swayam/"
          />
          <TeamCard
            name="Saswat Sahu"
            des="Publicity Head"
            img="5.png"
            number="8763169200"
            fb="https://www.facebook.com/saswat.sahu.545"
            tweet="https://twitter.com/SaswatS29667302"
            insta="https://www.instagram.com/saswat._/"
          />
        </div>
        <h1 className="team-heading">Hospitality </h1>
        <div className="team-container">
          <TeamCard
            name="Dhairya Mehta"
            des="Hospitality  Head"
            img="6.png"
            number="7000882670"
            fb="https://www.facebook.com/dhairya1012"
            tweet="https://twitter.com/_dhairya_mehta"
            insta="https://instagram.com/_dhairya_mehta/"
          />
          <TeamCard
            name="Anish Shukla"
            des="Hospitality Head"
            img="14.png"
            number="7011382324"
            tweet="https://twitter.com/ShuklaAnish"
            insta="https://www.instagram.com/_shuklanish_/"
          />
        </div>
        <h1 className="team-heading">Sports</h1>
        <div className="team-container">
          <TeamCard
            name="Shreyans Singhi"
            des="Sports Head"
            img="7.png"
            number="8763351553"
            fb="https://m.facebook.com/shreyans.singhi.3"
            insta="https://www.instagram.com/shreyyayans/"
          />
          <TeamCard
            name="Shiv Prasad Singh "
            des="Sports  Head"
            img="11.png"
            number="8826904914"
            insta="https://www.instagram.com/the_og_mahakaal/"
          />
        </div>

        <h1 className="team-heading">Sponsorship</h1>
        <div className="team-container">
          <TeamCard
            name="Siddhanta Panda"
            des="Sponsorship Head"
            img="12.png"
            number="6371788803"
            fb="https://m.facebook.com/siddhanta.panda.566"
            insta="https://www.instagram.com/pandas77.py/"
          />
        </div>
        <h1 className="team-heading">Print & Media</h1>
        <div className="team-container">
          <TeamCard
            name="Alok Kumar Sahoo"
            des="Print & Media Head"
            img="13.png"
            number="8763178492"
            insta="https://www.instagram.com/alok_sahoo98/"
          />
          <TeamCard
            name="Sayan De Bhowmick"
            des="Print & Media Head"
            img="21.png"
            number="9668511262"
            fb="https://www.facebook.com/sayan.debhowmick"
            insta="https://www.instagram.com/_ecbert_lothbrok_/"
          />
        </div>
        <h1 className="team-heading">Art n Deco</h1>
        <div className="team-container">
          <TeamCard
            name="Somyajeet Ojha"
            des="Art n Deco Head"
            img="15.png"
            number="7008785548"
            fb="https://www.facebook.com/somya.jeet.1"
            insta="https://www.instagram.com/the_unsolved_maze/"
          />
          <TeamCard
            name="Nishith Amman"
            des="Art n Deco Head"
            img="18.png"
            number="7008775733"
            fb="https://www.facebook.com/nishith.amman"
            insta="https://www.instagram.com/nishith.__/"
          />
        </div>

        <h1 className="team-heading">Photography and Videography</h1>
        <div className="team-container">
          <TeamCard
            name="Amarendra Sahu"
            des="Photography and Videography Head"
            img="17.png"
            number="9439529919"
            fb="https://www.facebook.com/eklavya.sahu.58"
            insta="https://www.instagram.com/man.in.a.can/"
          />
          <TeamCard
            name="asutosh samal"
            des="Photography and Videography Head"
            img="19.png"
            number="7008713016"
            fb="https://www.facebook.com/asutosh.samal.900"
            insta="https://instagram.com/__asutosh__?igshid=4x8fzqohrvv7"
          />
        </div>
        <h1 className="team-heading">Print & Media</h1>
        <div className="team-container">
          <TeamCard
            name="Alok Kumar Sahoo"
            des="Print & Media Head"
            img="13.png"
            number="8763178492"
            insta="https://www.instagram.com/alok_sahoo98/"
          />
          <TeamCard
            name="Sayan De Bhowmick"
            des="Print & Media Head"
            img="21.png"
            number="9668511262"
            fb="https://www.facebook.com/sayan.debhowmick"
            insta="https://www.instagram.com/_ecbert_lothbrok_/"
          />
        </div>
        <h1 className="team-heading">Disciplinary Committee</h1>
        <div className="team-container">
          <TeamCard
            name="Monisha"
            des="Disciplinary Committee Head"
            img="23.png"
            number="7488205972"
            fb="https://www.facebook.com/kaushal.monisha"
            insta="https://instagram.com/monishakaushal"
          />
          <TeamCard
            name="Anjali Mohapatra"
            des="Disciplinary Committee Head"
            img="25.png"
            number="7064514017"
            insta="https://www.instagram.com/_a.n.j.i.e_/"
          />
        </div>
      </section>
    );
  }
}
