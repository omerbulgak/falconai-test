import React from "react";
import "./userStatistic.css";

export default function UserStatistic({bestHero}) {
  return (
    <div className="userStatColumn leftContainer">
      <div className="userStatRow row">
        <img src={`/images/${bestHero.heroImage}`} className="avatar" alt={""} />
        <div className="leftPadding">
          <div className="bold">{bestHero.heroName}</div>
          <div>{bestHero.cs}</div>
        </div>
        <div className="leftPadding">
          <div className="bold">{bestHero.kda}</div>
          <div>{bestHero.stats}</div>
        </div>
        <div className="leftPadding">
          <div className="bold">{bestHero.percentage}</div>
          <div>{bestHero.numberOfGames} games</div>
        </div>
      </div>
    </div>
  );
}
