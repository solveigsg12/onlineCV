import React, { Component } from 'react';
import './AboutMe.css'

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutMeContainer">
        <div className="aboutMeText">
          hello my name is Solveig Sif Gudmundsdottir
        </div>
        <div className="aboutMeImage">
          <img
            key={'imgOfMe'}
            alt={'this is image a img of me'}
            src={require('../img/prufa.jpg')}
            className={'imgOfMe'}
          />
        </div>
      </div>
    );
  }
}

export default AboutMe;
