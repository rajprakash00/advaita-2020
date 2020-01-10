import React from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section className="about-page">
      <h1>About Us</h1>
      <Tilt
        className="about-text"
        tiltMaxAngleX={0}
        tiltMaxAngleY={1}
        perspective={1000}
      >
        <p>
          ADVAITA is the annual Techno-Cult fest of IIIT Bhubaneswar. It was
          named “ADVAITA”, meaning “non-duality”, which was the intention, to
          fuse both technology and culture into one. Past years has seen a
          mercurial rise in the fest, expanding and establishing itself as one
          of the biggest and the most anticipated events in the state of Odisha.
        </p>
        <br />
        <p>
          This four-day programme includes events in the category of Technology,
          Music, Art, Dance, Fashion, and celebrity performances. Our Technical
          events draw a large number of coders who show their expertise in
          coding events like Switch Coding, Principium, Blue Print and Swig and
          Code. The other Technical events include TechNova, the Technical
          Exhibition, DirtRush, PathSeeker, and BotSumo.
        </p>
        <br />
        <p>
          We boast of hosting The Scribbled Stories every year. Aakanksh, the
          Nukkad team of IIIT Bhubaneswar, have conducted performances
          throughout the city promoting social awareness and eradication of
          taboos in our society. We conduct a marathon on World Cancer Day as
          part of our social outreach and assistance.
        </p>
        <br />
        <p>
          In addition to that, our Cultural events also witness a unique
          footfall of students from different colleges of our country. With some
          illustriou stars like Mohammed Irfan, Pandit Hariprasad Chaurasia,
          Divya Kumar, and The Raghu Dixit, Gajendra Verma, Arjun Kanungo
          alongside the most famous EDM bands in the country, The Sunburn,
          Lagori, and The Lost Stories, ADVAITA has been successful in hosting
          some famous celebrity over the past years.
        </p>
      </Tilt>
    </section>
  );
};

export default About;
