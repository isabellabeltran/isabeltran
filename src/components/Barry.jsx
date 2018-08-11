import React, { Component } from 'react'; 

export default class Barry extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
    <div className="section-barry__container">
    <div className="section-barry__container--title">Meet Barry</div>
    <div className="section-barry__container--contentContainer">
      <div className="section-barry__container--content">
        <div>My ten month old rescue Dorgi (Corgi X Dachshund) that shares my passion for life.</div> 
        <br></br>
        <div>When he is not learning new tricks, Barry likes to spend his time meeting new furry and human friends.</div>
      </div>
    </div>
    <div className="section-barry__container--picture"></div>
    </div>
    )
  }
}