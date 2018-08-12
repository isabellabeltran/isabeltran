import React, { Component } from 'react'; 
import headerVideo from '../videos/headerVideo.mp4'; 

export default class Greeting extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div>
        <div className="header">
          <video className="header__video" autoPlay muted loop>
            <source src={headerVideo} type="video/mp4"></source>
          </video> 
          <div className="header__greeting">
              <div className="header__greeting--text">Hello</div>
              <div className="header__greeting--text">Do you want to...</div>
              <div className="header__greeting--nav">
                <a href="#about">learn about me</a>
                <a href="#projects">see my work</a>
                <a href="#contact">get in touch</a>
              </div>
          </div>
        </div>
      </div> 
    )
  }
}