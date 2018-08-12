import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactImage from '../images/React.png';
import Redux from '../images/Redux.png'; 
import Sass from '../images/Sass.png'; 
import css from '../images/css.png';
import nodeJS from '../images/NodeJs.png';
import expressJS from '../images/expressNodeJs.png';
import mysql from '../images/mysql.png';
import mongo from '../images/Mongo.png';
import postSQL from '../images/postgresql.png';
import redis from '../images/redis.png'; 
import socket from '../images/socketIO.png'; 
import Stripe from '../images/stripe.png';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-projects">
        <div className="sectionHeaderLight">
          <div className="sectionHeaderLight__primary">A sample of my work</div>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                    &nbsp;
                </div>
                <h4 className="card__heading">
                    Jijenge Academy
                </h4>
                <div className="card__details">
                A website created for an organization that teaches computer science fundamentals to orphans in the slums of Nairobi Kenya
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__tech">
                  <h4 className="card__heading">Tech Stack</h4>
                  <div className="card__tech">
                    <div className="card__tech--links">
                      <img src={reactImage} /> 
                      <img src={Sass} /> 
                      <img src={Stripe} />
                    </div>
                    <div className="card__tech--links">
                      <img src={nodeJS} /> 
                      <img src={expressJS} /> 
                      <img className="card__tech--links-postgres" src={postSQL} /> 
                    </div>
                  </div>
                </div>
                <div className="card__tech">
                  <h4 className="card__heading">Check it out</h4>
                  <div className="card__code">
                    <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="5x" color="black" /></a>
                    <div className="card__code--tag">Code</div>
                  </div>
                  <div className="card__code">
                    <a href="https://jijenge.herokuapp.com/" target="_blank"><FontAwesomeIcon icon="external-link-alt" size="5x" color="black" /></a>
                    <div className="card__code--demoTag">Demo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  Foodie
                </h4>
                <div className="card__details">
                  A web app for food lovers to save money by ordering meals with people around them
                </div>
              </div>
              <div className="card__side card__side--back">

              <div className="card__tech">
                  <h4 className="card__heading">Tech Stack</h4>
                  <div className="card__tech">
                    <div className="card__tech--links">
                      <img src={reactImage} /> 
                      <img src={Sass} /> 
                      <img src={Redux} /> 
                      <img src={redis} /> 
                    </div>
                    <div className="card__tech--links">
                      <img src={nodeJS} /> 
                      <img src={expressJS} /> 
                      <img className="card__tech--links-postgres" src={postSQL} /> 
                      <img src={mongo} /> 
                    </div>
                  </div>
                </div>
                <div className="card__tech">
                  <h4 className="card__heading">Check it out</h4>
                  <div className="card__code">
                    <a href="https://github.com/mdhiFoodie" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="5x" color="black" /></a>
                    <div className="card__code--tag">Code</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                      &nbsp;
                </div>
                <h4 className="card__heading">
                  Codesling
                </h4>
                <div className="card__details">
                  A game where friends race each other to complete the given algorithm 
                </div>
              </div>
              <div className="card__side card__side--back">

              <div className="card__tech">
                  <h4 className="card__heading">Tech Stack</h4>
                  <div className="card__tech">
                    <div className="card__tech--links">
                      <img src={reactImage} /> 
                      <img className="card__tech--links-css" src={css} /> 
                      <img src={socket} />
                    </div>
                    <div className="card__tech--links">
                      <img src={nodeJS} /> 
                      <img src={expressJS} /> 
                      <img className="card__tech--links-postgres" src={postSQL} /> 
                    </div>
                  </div>
                </div>
                <div className="card__tech">
                  <h4 className="card__heading">Check it out</h4>
                  <div className="card__code">
                    <a href="https://github.com/LegacyDreamTeam" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="5x" color="black" /></a>
                    <div className="card__code--tag">Code</div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}