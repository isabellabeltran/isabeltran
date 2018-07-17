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
import Stripe from '../images/stripe.png';


export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container">
        <div className="container__image">
          <div className="container__greeting">
            <div className="container__greeting--box">
              <div className="container__greeting--title">Do you want to...</div>
              <div className="container__greeting--link"><a href="#about">See who I am?</a></div>
              <div className="container__greeting--link"><a href="#portfolio">See my work</a></div>
            </div>
          </div>
        </div>
        <section className="section-inBetween">
        <div className="section-inBetween__container">
        
        </div>
      </section>
      <section id="about">
      <div className="section-about">
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
          </div>
        </div>
        </div>
      </section> 

      {/* <section className="section-inBetween">
        <div className="section-inBetween__container">
        
        </div>
      </section> */}

        {/* PROJECTS */}

      <section id="portfolio">
      <div className="section-projects">
      <div className="section-projects__container">
      <div className="section-projects__image">
        <div className="heading-primary">
          here's what I've done so far 
        </div>

      <div className="projectRow">
        <div className="card">
          <div class="card__side card__side--front">
            <div class="card__picture card__picture--1">
              &nbsp;
            </div>
            <div className="card__frontInformation">
              <div class="card__frontTitle">
                Jijenge
              </div>
              <div className="card__appDescription">
                A website created for an organization that teaches computer science fundamentals to orphans in the slums of Nairobi Kenya
              </div>
            </div>
          </div>

          <div className="card__side card__side--back">

            <div className="card__backCardContainer">
                <div className="card__backCardContainer--techStack">
                  <div className="card__backCardContainer--techStackTitle">Tech Stack</div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={reactImage} /> 
                    <img className="card__backCardContainer--img" src={Sass} /> 
                    <img className="card__backCardContainer--imgStripe" src={Stripe} /> 
                  </div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={nodeJS} /> 
                    <img className="card__backCardContainer--img" src={expressJS} /> 
                    <img className="card__backCardContainer--imgPost" src={postSQL} /> 
                  </div>
                </div>

                <div className="card__backCardContainer--codeContainer">
                  <div className="card__backCardContainer--codeContainerTitle">Check out the code</div>
                  <div className="card__backCardContainer--codeLinks">
                  <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                  </div>
                </div>
            </div>

        </div>
      </div>

          {/* FOODIE */}

        <div className="card">
          <div class="card__side card__side--front">
            <div className="card__frontInformation">
              <div class="card__frontTitle">
                Foodie
              </div>
              <div className="card__appDescription">
                A web app for food lovers to save money by ordering meals with people around them 
              </div>
            </div>
            <div class="card__picture card__picture--2">
              &nbsp;
            </div>
          </div>

          <div className="card__side card__side--back">
            <div className="card__backCardContainer">
              <div className="card__backCardContainer--techStack">
              <div className="card__backCardContainer--techStackTitle">Tech Stack</div>
              <div className="card__backCardContainer--techStackLinks">
                <img className="card__backCardContainer--img" src={reactImage} /> 
                <img className="card__backCardContainer--img" src={Sass} /> 
                <img className="card__backCardContainer--img" src={Redux} /> 
              </div>
              <div className="card__backCardContainer--techStackLinks">
                <img className="card__backCardContainer--img" src={nodeJS} /> 
                <img className="card__backCardContainer--img" src={expressJS} /> 
                <img className="card__backCardContainer--imgPost" src={postSQL} /> 
              </div>
              <div className="card__backCardContainer--techStackLinks">
              <img className="card__backCardContainer--img" src={redis} /> 
              <img className="card__backCardContainer--img" src={mongo} /> 
              </div>
            </div>
            <div className="card__backCardContainer--codeContainer">
              <div className="card__backCardContainer--codeContainerTitle">Check out the code</div>
              <div className="card__backCardContainer--codeLinks">
                <a href="https://github.com/mdhiFoodie" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

          {/* CODESLING */}

          <div className="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
                <div className="card__frontInformation">
                <div class="card__frontTitle">
                Codesling
              </div>
              <div className="card__appDescription">
                Game where friends race each other to complete the given algorithm 
              </div>
              </div>
              </div>
              
              <div className="card__side card__side--back">
              <div className="card__backCardContainer">
                <div className="card__backCardContainer--techStack">
                  <div className="card__backCardContainer--techStackTitle">Tech Stack</div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={reactImage} /> 
                    <img className="card__backCardContainer--imgCss" src={css} /> 
                    <img className="card__backCardContainer--imgSocket" src={socket} /> 
                  </div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={nodeJS} /> 
                    <img className="card__backCardContainer--img" src={expressJS} /> 
                    <img className="card__backCardContainer--imgPost" src={postSQL} /> 
                  </div>
                </div>

                <div className="card__backCardContainer--codeContainer">
                  <div className="card__backCardContainer--codeContainerTitle">Check out the code</div>
                  <div className="card__backCardContainer--codeLinks">
                  <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                  </div>
                </div>
            </div>
              </div>
            </div>

            {/* PETBOOK */}

          <div className="card">
              <div class="card__side card__side--front">
                <div className="card__frontInformation">
                  <div class="card__frontTitle">
                    Petbook
                  </div>
                  <div className="card__appDescription">
                    A Facebook clone that mimics its basic functionality.
                  </div>
                </div>
                <div class="card__picture card__picture--4">
                  &nbsp;
                </div>
              </div>

              <div className="card__side card__side--back">
              
              <div className="card__backCardContainer">
                <div className="card__backCardContainer--techStack">
                  <div className="card__backCardContainer--techStackTitle">Tech Stack</div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={reactImage} /> 
                    <img className="card__backCardContainer--imgCss" src={css} /> 
                  </div>
                  <div className="card__backCardContainer--techStackLinks">
                    <img className="card__backCardContainer--img" src={nodeJS} /> 
                    <img className="card__backCardContainer--img" src={expressJS} /> 
                    <img className="card__backCardContainer--imgPost" src={mysql} /> 
                  </div>
                </div>

                <div className="card__backCardContainer--codeContainer">
                  <div className="card__backCardContainer--codeContainerTitle">Check out the code</div>
                  <div className="card__backCardContainer--codeLinks">
                  <a href="https://github.com/isabellabeltran/fbClone" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                  </div>
                </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        </section>

        {/* <section className="section-contactMe">
          <div className="section-contactMe__footerContainer">
            <div className="section-contactMe__footerContainer--title">Contact me</div>
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
        </section>  */}
      </div>
    )
  }
} 