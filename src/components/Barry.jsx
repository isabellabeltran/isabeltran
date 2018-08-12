import React, { Component } from 'react'; 
import barry3 from '../images/barryalone.jpg';
import barry1 from '../images/barryandranger.jpg';
import barry2 from '../images/jennyandbarry.jpg';

export default class Barry extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
    <div className="section-barry">
      <div className="sectionHeaderDark">
        <div className="sectionHeaderDark__primary">Meet Barry</div>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <p>My ten month old rescue Dorgi (Corgi X Dachshund) that shares my passion for life.</p>
          <p>When he is not learning new tricks, Barry likes to spend his time meeting new furry and human friends.</p>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img className="composition__photo composition__photo--p1" src={barry1}/>
            <img className="composition__photo composition__photo--p2" src={barry2}/>
            <img className="composition__photo composition__photo--p3" src={barry3}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
}