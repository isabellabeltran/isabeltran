import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Greeting from './Greeting.jsx';
import Navigation from './Navigation.jsx';
import About from './About.jsx';
import Barry from './Barry.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return (
      <div>
        <header>
          <Greeting /> 
        </header>
        <main>
          <Navigation /> 
          <section id="about">
            <About /> 
          </section>
          <section>
            <Barry />
          </section>
          <section id="projects">
            <Projects />
          </section>
        </main>
        <footer id="contact">
          <Contact />
        </footer>
      </div>
    )
  }
} 
































/**
 * 
 * 
          <section id="contact">
          <div  className="section-contactMe">
            <div className="section-contactMe__footerContainer">
              <div className="section-contactMe__footerContainer--title">Let's get in touch</div>
              <div className="section-contactMe__footerContainer--links">
                <a href="https://www.linkedin.com/in/isa-beltran/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" color="black" /></a>
                <div className="section-contactMe__footerContainer--linksName">LinkedIn</div>
              </div>
              <div className="section-contactMe__footerContainer--links">
                <a href="https://github.com/isabellabeltran" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                <div className="section-contactMe__footerContainer--linksName">Github</div>
              </div> */
              /* <div className="section-contactMe__footerContainer--links">
                <a href="#" target="_blank"><FontAwesomeIcon icon="envelope" size="4x" color="black" /></a>
                <div className="section-contactMe__footerContainer--linksName">Email</div>
              </div> */
            /* </div> */
            /* <div className="websiteSources">
              <div className="websiteSources__content">This website</div>
            </div> */
            /* </div> */
          /* </section>  */
