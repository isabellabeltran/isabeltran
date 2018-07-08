import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jijenge from '../images/jijenge.png';

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

        {/* <div className="quote">
        "Be fearless in the pursuit of what sets your soul on fire"
        </div> */}

      <section className="section-about">
        <div className="heading-primary">
          Introduction
        </div>
        <div className="section-about__container">
        <div className="section-about__container--left">
          <div className="section-about__container--image">
            <div className="section-about__container--image-1">
              
            </div>
            <div className="section-about__container--image-2">
              
              </div>
          </div>
          <div className="section-about__container--description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          fugiat officia modi, odit minus. Ipsam est dignissimos quibusdam, fuga saepe repellendus magni! Excepturi recusandae culpa iure omnis aliquam sint 
          quisquam odio in cupiditate fugiat tempore ut, ratione quo aspernatur officiis ad. Ipsum ullam voluptas illum tenetur asperiores distinctio nobis iusto qui nisi? 
          Enim, hic nulla. Hic ratione debitis, vel reprehenderit fugit consequatur nisi asperiores magni tempore, tempora porro praesentium rem! Reiciendis deserunt est ab illo!
          Quisquam sequi illo voluptas excepturi reprehenderit odio quam quae, porro id pariatur, obcaecati officia?
          </div>
        </div>
        <div className="section-about__container--right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi doloribus hic, accusamus blanditiis nulla voluptatibus dolore eius et eaque dignissimos 
          fugiat officia modi, odit minus. Ipsam est dignissimos quibusdam, fuga saepe repellendus magni! Excepturi recusandae culpa iure omnis aliquam sint 
          quisquam odio in cupiditate fugiat tempore ut, ratione quo aspernatur officiis ad. Ipsum ullam voluptas illum tenetur asperiores distinctio nobis iusto qui nisi? 
          Enim, hic nulla. Hic ratione debitis, vel reprehenderit fugit consequatur nisi asperiores magni tempore, tempora porro praesentium rem! Reiciendis deserunt est ab illo!
          Quisquam sequi illo voluptas excepturi reprehenderit odio quam quae, porro id pariatur, obcaecati officia?
        </div>
        </div>
      </section> 


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
            <div className="card__cta">
              <div className="card__heading">Jijenge</div>
              <div className="card__subheading">
              REACT | NODE | EXPRESS | STRIPE 
              </div>
              <div className="card__description">
                A website that collects donations for the kids of Nairobi Kenya 
                A website that collects donations for the kids of Nairobi Kenya 
                A website that collects donations for the kids of Nairobi Kenya 
              </div>

              <div className="card__links">
                <div className="card__links--github">
                <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                </div>
                <div className="card__links--demo">
                <a href="#" target="_blank"><FontAwesomeIcon icon="video" size="4x" color="white" /></a>
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
              <div class="card__picture card__picture--1">
                &nbsp;
              </div>
            </div>

            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__heading">Foodie</div>
                <div className="card__subheading">
                REACT | REDUX | NODE | EXPRESS | REDIS | MONGO | POSTGRESQL 
                </div>
                <div className="card__description">
                  A web app for food lovers to save money by ordering meals with people around them  
                </div>

                <div className="card__links">
                  <div className="card__links--github">
                  <a href="https://github.com/" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                  </div>
                  <div className="card__links--demo">
                  <a href="#" target="_blank"><FontAwesomeIcon icon="video" size="4x" color="white" /></a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Codesling */}

              <div className="row">
            <div className="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
              </div>

              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__heading">Codesling</div>
                  <div className="card__subheading">
                  REACT | NODE | EXPRESS | SOCKET.IO 
                  </div>
                  <div className="card__description">
                    Game where friends race each other to complete the given algorithm
                  </div>

                  <div className="card__links">
                    <div className="card__links--github">
                    <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                    </div>
                    <div className="card__links--demo">
                    <a href="#" target="_blank"><FontAwesomeIcon icon="video" size="4x" color="white" /></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>


        {/* Petbook */}
        <div className="row">
            <div className="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
              </div>

              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__heading">Petbook</div>
                  <div className="card__subheading">
                  REACT | NODE | EXPRESS | SOCKET.IO | MYSQL
                  </div>
                  <div className="card__description">
                    A Facebook clone that mimics its basic functionality
                  </div>

                  <div className="card__links">
                    <div className="card__links--github">
                    <a href="https://github.com/Jijenge" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="white" /></a>
                    </div>
                    <div className="card__links--demo">
                    <a href="#" target="_blank"><FontAwesomeIcon icon="video" size="4x" color="white" /></a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      </section>

      <section className="section-contactMe">

      </section> 

      </div>
    )
  }
} 