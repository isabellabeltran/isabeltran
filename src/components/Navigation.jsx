import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigation extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="navigation">
      <input className="navigation__checkbox" type="checkbox" id="navi-toggle"/>
      <label for="navi-toggle" className="navigation__button">
        <a className="navigation__icon"><FontAwesomeIcon icon='chevron-circle-down' size="5x" color="white" /></a>
      </label>
      <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a className="navigation__link" href="#">Learn about me</a></li>
            <li className="navigation__item"><a className="navigation__link" href="#">See my work</a></li>
            <li className="navigation__item"><a className="navigation__link" href="#">Get in touch</a></li>
          </ul>
        </nav>
      </div> 
    );
  }
}