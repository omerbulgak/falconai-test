import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circularProgressDashboard.css";

export default function CircularProgressDashboard({ data }) {
  let dashboardData = data.progressDashboard[0];
  return (
    <>
      <div className="circularProgressContainer">
        <div className="circularProgressRow">
          <div className="circularProgressColumn leftBox">
            <div className="leftBoxRows normal">Normal</div>
            <div className="leftBoxRows">Single / Duo</div>
            <div className="leftBoxRows">Flex</div>
            <div className="leftBoxRows">All</div>
          </div>
          <div className="circularProgressColumn circularProgressBar">
            <CircularProgressbar
              value={100}
              text={`${dashboardData.numberOfGames}`}
            />
            <div className="circularProgressColumn progressBottomText">
              Played Games
            </div>
          </div>
          <div className="circularProgressColumn statBox">
            <div className="statOne">20T 10G 9Y</div>
            <div className="statTwo">
              <span class="mustard">{dashboardData.stats[0]}</span> /{" "}
              <span className="red">{dashboardData.stats[1]}</span> /{" "}
              <span className="green">{dashboardData.stats[2]}</span>
            </div>
            <div className="statThree">
              {dashboardData.kda}{" "}
              <span className="red">({dashboardData.lossPercentage})</span>
            </div>
          </div>
          <div className="circularProgressColumn circularProgressBar">
            <CircularProgressbar
              value={dashboardData.successRate}
              text={`${dashboardData.successRate}%`}
              styles={buildStyles({
                pathColor: "green",
                trailColor: "#192139",
                strokeLinecap: "butt"
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
