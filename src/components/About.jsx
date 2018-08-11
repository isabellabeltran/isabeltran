import React, { Component } from 'react'; 
import Isabella from '../images/isabellasPicture.jpg';

export default class About extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return(
      <div className="section-about">
        <div className="sectionHeaderDark">
          <div className="sectionHeaderDark__primary">Hi, I'm Isabella Beltran</div>
          <div className="sectionHeaderDark__secondary">sales consultant turn software engineer</div>
        </div>
        <div className="section-about__picture">
          <img src={Isabella} />
        </div>
        <div className="section-about__story">
          <div>
          I’m a software engineer focused on full-stack development with a passion for building meaningful web applications. 
          My interest in technology started when I was going to school for Marketing and Design in Guatemala. 
          One of my classes was "Algorithms and Basic Programming" and to be honest before this class I didn’t even know programming existed. 
          When the semester ended I was full of curiosity and wanted to know more but switching careers at the time seemed impossible to me. 
          In Guatemala education is a luxury that at least 54% of the population can’t afford. 
          I felt lucky to be there in the first place and I didn’t want to risk my current opportunity.
          </div>
          <br></br>
          <div>
            But life works in mysterious ways bringing my family and I to the United States five years ago. 
            This experience challenged me in many different ways but it also gave me what I consider my greatest quality, resilience. 
            This helped me support my family working 60 hour shifts in a car dealership leading the sales team most of the time with an average of twelve cars a month and $35K gross. 
            It was during this time that I was able to learn more about programing through online courses and found more fulfillment in that than anything else that I have worked before. 
          </div>
          <br></br>
          <div>
          I wish I had the resources to go back to school but my responsibilities made me look for alternative options. 
          After a prolonged phase of sacrifices and as a result of extensive research, I came across Hack Reactor - a software engineer Bootcamp that gave me the opportunity to meet professionals and other people who were passionate about programming like me. 
          I got the chance to work with them, learn from them and was able to polish my professional as well as interpersonal skills. 
          </div>
          <br></br>
          <div>
          At present, I am developing a website for a non-profit in Africa that teaches computer science fundamentals to the non-privilege kids at an orphanage in the slums of Nairobi, Kenya. 
          The living and education expenses of these kids solely depend on donations; therefore, by building them a website, the orphanage will be able to seek donation from various sources across the globe. 
          This project is really close to my heart because I believe education should be a necessity not a luxury, which is the case for many countries. 
          So it brings me joy knowing that by using my skills in technology low resources communities will receive the education they need. 
          </div>
          <br></br>
            <div>If you need some professional guidance, want to know more about programming boot-camps or have 
            an opportunity where you think I would be a great fit, feel free to <a href="#contact">contact me.</a> I look forward to hearing from you!</div>
          </div>
      </div>
    )
  }
}