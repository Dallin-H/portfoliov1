import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="About_Background">
          <div className="About_Landing_Title">Dallin Hyde</div>
          <div className="About_Landing_Portrait">
            <img
              src={require("./../dallin-h-profile-pic.jpg")}
              alt="Dallin_Pic"
              width="125px"
              height="150px"
            />
          </div>
          <div className="About_Landing_Subtitle">Web Developer</div>
          <div className="About_Landing_Content">
            I am a former technical troubleshooting expert. I bring my dedication,
            professionalism, and problem solving to any team.
          </div>
          <div className="About_Landing_Footer">This site is made with React</div>
        </div>
      </div>
    );
  }
}

export default About;