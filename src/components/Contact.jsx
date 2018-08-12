import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Email from './ObfuscatedEmail.jsx';

export default class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="section-footer">
        <div className="sectionHeaderDark">
          <div className="sectionHeaderDark__primary">Let's get in touch</div>
        </div>
        <div className="contact">
          <a href="https://www.linkedin.com/in/isa-beltran/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" color="white" /></a>
          <Email />
          <a href="https://github.com/isabellabeltran" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
        </div>
        <div className="siteInfo">
          <div className="siteInfo__primary">This website is powered by <div className="siteInfo__secondary">NODE</div>, hosted on <div className="siteInfo__secondary">HEROKU</div> and has a public repository on <a href="https://github.com/isabellabeltran/isabeltran" target="_blank">GITHUB</a></div>
        </div>
      </div>
    )
  }
}
