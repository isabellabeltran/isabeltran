import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jijenge from '../images/jijenge.png';
import Javascript from '../images/js.png';
import reactImage from '../images/React.png';
import Redux from '../images/Redux.png'; 
import Sass from '../images/Sass.png'; 
import css from '../images/css.png';
import html from '../images/html.png'; 
import jQuery from '../images/jquery.gif';
import nodeJS from '../images/NodeJs.png';
import expressJS from '../images/expressNodeJs.png';
import mysql from '../images/mysql.png';
import mongo from '../images/Mongo.png';
import postSQL from '../images/postgresql.png';
import redis from '../images/redis.png'; 
import socket from '../images/socketIO.png'; 
import mocha from '../images/mocha.png';
import chai from '../images/chai.png';
import jasmine from '../images/jasmine.png';
import jest from '../images/jest.png';
import git from '../images/git.png';
import npm from '../images/npm.png';
import webpack from '../images/webpack.png';
import yarn from '../images/yarn.png'; 
import babel from '../images/babel.png'; 


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="container__image">
          <div className="container__image--1">
            Hi, I’m Isabella.
          </div>
          <div className="container__image--2">
            An eager Software Engineer ready to take on new challenges
          </div>
        </div>

      <section className="section-about">
        <div className="heading-primary">
          A little bit about myself
        </div>
        <div className="section-about__container">
        <div className="section-about__container--left">
          <div className="section-about__container--imageContentRow">
            <div className="section-about__container--image1">
              
            </div>
            <div className="section-about__container--content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          fugiat officia modi, odit minus. Ipsam est dignissimos quem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
            </div>
          </div>
          <div className="section-about__container--imageContentRow">
            <div className="section-about__container--content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          fugiat officia modi, odit minus. Ipsam est dignissimos quem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          
            </div>
            <div className="section-about__container--image2">
              
            </div>
          </div>
          <div className="section-about__container--imageContentRow">
            <div className="section-about__container--image3">
              
            </div>
            <div className="section-about__container--content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          fugiat officia modi, odit minus. Ipsam est dignissimos quem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 

            </div>
          </div>

        {/* A LITTLE BIT ABOUT MYSELF */}
        </div>
        {/* <div className="section-about__container--right"> */}
          {/* <div className="section-about__container--mainTechTitle">Technical Skills</div>

          <div className="section-about__container--techStack">
            <div className="section-about__container--techEnd">
            <div className="section-about__container--firstLogoContainer">
                <img className="section-about__container--logo" src={Javascript} /> 
                <img className="section-about__container--logo" src={jQuery} /> 
                <img className="section-about__container--reactImage" src={reactImage} /> 
                <img className="section-about__container--redux" src={Redux} /> 
              </div>
              <div className="section-about__container--firstLogoContainer">
                <img className="section-about__container--logo" src={Sass} /> 
                <img className="section-about__container--css" src={css} /> 
                <img className="section-about__container--logo" src={html} /> 
                <img className="section-about__container--nodeJS" src={nodeJS} /> 
              </div>
              <div className="section-about__container--firstLogoContainer">
              <img className="section-about__container--express" src={expressJS} /> 
                <img className="section-about__container--logo" src={mysql} /> 
                <img className="section-about__container--logo" src={mongo} /> 
                <img className="section-about__container--postSQL" src={postSQL} /> 
              </div>
              <div className="section-about__container--firstLogoContainer">
                <img className="section-about__container--logo" src={redis} /> 
                <img className="section-about__container--logo" src={socket} /> 
                <img className="section-about__container--logo" src={mocha} /> 
                <img className="section-about__container--logo" src={chai} /> 
              </div>
              <div className="section-about__container--firstLogoContainer">
                <img className="section-about__container--jasmine" src={jasmine} /> 
                <img className="section-about__container--jest" src={jest} /> 
                <img className="section-about__container--git" src={git} /> 
                <img className="section-about__container--npm" src={npm} /> 
              </div>
              <div className="section-about__container--firstLogoContainer">
                <img className="section-about__container--webpack" src={webpack} /> 
                <img className="section-about__container--yarn" src={yarn} />
                <img className="section-about__container--logo" src={babel} /> 
              </div>
            </div>
          </div> */}
        {/* </div> */}
        </div>
      </section> 

        {/* PROJECTS */}

      <section className="section-projects">
      <div className="section-projects__image">
        <div className="heading-primary">
          here's what I've done so far 
        </div>
        <div className="row">
          <div className="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">
                &nbsp;
              </div>
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__backCardContainer">
                <div className="card__backCardContainer--backImage">
                  <div className="backCardImage"></div>
                </div>
                <div className="card__backCardContainer--backdescription">
                  <div className="card__backCardContainer--backTitle">Jijenge</div>
                  <div className="card__backCardContainer--backSubtitle">REACT | NODE | EXPRESS | STRIPE </div>
                  <div className="card__backCardContainer--backAppdescription">
                    A website created for an organization that teaches computer science fundamentals to orphans in the slums of Nairobi Kenya
                </div>
                <div className="card__backCardContainer--backLinks">
                  <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x" color="white" /></a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>

        {/* FOODIE */}

        <div className="row">
          <div className="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">
                &nbsp;
              </div>
            </div>

            <div className="card__side card__side--back card__side--back-1">
              <div className="card__backCardContainer">
                <div className="card__backCardContainer--backImage">
                  <div className="backCardImage-2"></div>
                </div>
                <div className="card__backCardContainer--backdescription">
                  <div className="card__backCardContainer--backTitle">Foodie</div>
                  <div className="card__backCardContainer--backSubtitle">REACT | REDUX | NODE | EXPRESS | REDIS | MONGO | POSTGRESQL </div>
                  <div className="card__backCardContainer--backAppdescription">
                    A web app for food lovers to save money by ordering meals with people around them 
                </div>
                <div className="card__backCardContainer--backLinks">
                  <a href="https://github.com/mdhiFoodie" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x" color="white" /></a>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>

        {/* CODESLING */}

              <div className="row">
            <div className="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__backCardContainer">
                  <div className="card__backCardContainer--backImage">
                  <div className="backCardImage-3"></div>
                  </div>
                  <div className="card__backCardContainer--backdescription">
                    <div className="card__backCardContainer--backTitle">Codesling</div>
                    <div className="card__backCardContainer--backSubtitle">REACT | NODE | EXPRESS | SOCKET.IO</div>
                    <div className="card__backCardContainer--backAppdescription">
                      Game where friends race each other to complete the given algorithm 
                    </div>
                    <div className="card__backCardContainer--backLinks">
                    <a href="https://github.com/LegacyDreamTeam" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x" color="white" /></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>


        {/* PETBOOK */}
        <div className="row">
            <div className="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--4">
                  &nbsp;
                </div>
              </div>

              <div className="card__side card__side--back card__side--back-1">
                <div className="card__backCardContainer">
                  <div className="card__backCardContainer--backImage">
                  <div className="backCardImage-4"></div>
                  </div>
                  <div className="card__backCardContainer--backdescription">
                    <div className="card__backCardContainer--backTitle">Petbook</div>
                    <div className="card__backCardContainer--backSubtitle">REACT | NODE | EXPRESS | MYSQL</div>
                    <div className="card__backCardContainer--backAppdescription">
                        A Facebook clone that mimics its basic functionality for any kind of pet. 
                    </div>
                    <div className="card__backCardContainer--backLinks">
                    <a href="https://github.com/isabellabeltran/fbClone" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x" color="white" /></a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
      </div>
      </section>

      <section className="section-contactMe">
      <div className="section-contactMe__footerContainer">
          <div className="section-contactMe__footerContainer--title">Follow me</div>
          <div className="section-contactMe__footerContainer--links">
            <a href="https://www.linkedin.com/in/isa-beltran/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" color="white" /></a>
          </div>
          <div className="section-contactMe__footerContainer--links">
            <a href="https://github.com/isabellabeltran" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x" color="white" /></a>
          </div>
          <div className="section-contactMe__footerContainer--links">
          <a href="#" target="_blank"><FontAwesomeIcon icon="envelope" size="3x" color="white" /></a>
          </div>
      </div>
      </section> 
      </div>
    )
  }
} 