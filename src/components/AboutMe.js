import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
        <div className="aboutMeText">
          <div className="aboutMeHi">Hi!</div>
          <span>My name is Solveig Sif Gudmundsdottir and I work as a software developer at <span className="purple">Wow air</span>.</span>
        </div>
        <div className="graduationPictureContainer">
          <img src={require("../img/graduationPicture.jpg")} className="graduationPicture"/>
        </div>
        <div className="moreAboutMe">
          I graduated from University of Reykjavik January 2015 and the picture above is frome that day. I am standing there in the middle with my best freiends.
        </div>
      </div>
    );
  }
}

export default AboutMe;
