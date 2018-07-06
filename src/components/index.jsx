import React, { Component } from 'react';
import Navigation from './Navigation.jsx'; 
import Projects from './Projects.jsx'; 

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="navigation">
          <Navigation /> 
        </div>
        <div className="container__image">
          <div className="container__image--1">
          Hi, I’m Isabella 
          </div>
          <div className="container__image--2">
            {/* Keep scrolling and get to know me */}
          </div>
          <div className="container__image--3">
            
          </div>
        </div>


        <div className="quote">
        "Be fearless in the pursuit of what sets your soul on fire"
        </div>

      <section>
        <div className="portfolio">
          <div className="portfolio__header">
            Portfolio
          </div>
          <div className="portfolio__projects">
            <Projects /> 
          </div>
        </div>
      </section>

      </div>
    )
  }
} 