import React from 'react';
import autoFill from "../images/auto-fill.svg";
import topLane from "../images/top-lane.svg";
import jungle from "../images/jungle.svg";
import middleLane from "../images/middle-lane.svg";
import bottomLane from "../images/bottom-lane.svg";
import support from "../images/support.svg";

export function UserStrengths({ data }) {
  return (<div className="userStatColumn rightContainer">
    <div className="userStatRow statBar">
      <img src={autoFill} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
    <div className="userStatRow statBar">
      <img src={topLane} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
    <div className="userStatRow statBar">
      <img src={jungle} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
    <div className="userStatRow statBar">
      <img src={middleLane} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
    <div className="userStatRow statBar">
      <img src={bottomLane} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
    <div className="userStatRow statBar">
      <img src={support} className='detailsIcon'></img>
      <div className='progressBar'>
      </div>
    </div>
  </div>);
}