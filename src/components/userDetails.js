import React from "react";
import "./userDetails.css";
import tripleKill from "../images/triplekill.svg";
import move from "../images/move.svg";
import resize from "../images/resize.svg";
import { numberWithCommas } from "../utils";

export default function UserDetails({ data }) {
  return (
    <div className="mainContainer">
      <img
        className="backgroundImage"
        src={"/images/backgroundImage.svg"}
        alt={"background"}
      />
      <div className="mainContainer_child">
        <div className="userImageContainer">
          <img
            src={`/images/${data.profileImage}`}
            alt="avatar"
            className="profileImage"
          />
        </div>
        <div className="userDetailsContainer">
          <h1 className="userName">{data.name}</h1>
          <h4>Rank {data.rank}</h4>
          <div className="rankContainer">
            <h6>Ranked Solo</h6>
            <h1 className="rankedSolo">{data.rankedSolo}</h1>
            <h4>
              {data.lowPriority}LP / {data.win}W {data.lose}L
            </h4>
          </div>
          <div className="statsContainer">
            <div className="statsColumn">
              <div className="statsHeader">Win Rate</div>
              <div className="fontType percentageResult">
                {data.winPercentage}%
              </div>
            </div>
            <div className="statsColumn">
              <div className="statsHeader">Win/Loss</div>
              <div className="fontType winOverLoss">{data.winOverLose}</div>
            </div>
            <div className="statsColumn">
              <div className="statsHeader">AVG. KDA</div>
              <div className="fontType">{data.averageKDA}</div>
            </div>
            <div className="statsColumn">
              <div className="statsHeader">CS Per Min</div>
              <div className="fontType">{data.csPerMin}</div>
            </div>
            <div className="tripleKill">
              <img
                src={tripleKill}
                alt="tripleKillIcon"
                className="tripleKillIcon"
              />
              <div className="multiKillText">Highest Multikill</div>
            </div>
          </div>
          <div>{numberWithCommas(data.numberofMatches)} Matches</div>
        </div>
        <div className="badge">
          <img
            src={`/images/${data.badge}`}
            alt="badge"
            className="badgeImage"
          />
        </div>
        <div className="moveIcon">
          <img src={move} alt="moveIcon" />
        </div>
        <div className="resizeIcon">
          <img src={resize} alt="resizeIcon" />
        </div>
      </div>
    </div>
  );
}
