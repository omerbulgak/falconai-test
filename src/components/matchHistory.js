import React from "react";
import "./matchHistory.css";

export default function MatchHistory({ matchHistoryData }) {
  let status = matchHistoryData.isVictory ? matchHistoryData.statusIconWin : matchHistoryData.statusIconLoss;
  return (
    <>
      <div className="matchedHistoryRow">
        <div>
          <img
            src={`/images/${status}`}
            alt="statusIcon"
            className="statusIcon"
          />
        </div>
        <div className="bannerStats">
          <div className="bannerStats_matchType">
            {matchHistoryData.matchType}
          </div>
          <div className="bannerStats_hours">{matchHistoryData.hours}</div>
          <div className="bannerStats_time">{matchHistoryData.time}</div>
        </div>
        <div className="avatar">
          <img
            src={`/images/${matchHistoryData.avatar}`}
            alt="profileImage"
            className="avatar"
          />
          <img
            src={`/images/${matchHistoryData.profileType}`}
            alt="profileType"
            className="profileType"
          />
        </div>
        <div className="spellIcon">
          <img src={`/images/${matchHistoryData.spellImage}`} alt="spellIcon" />
        </div>

        <div className="statContainer">
          <div className="statsFigures"> {matchHistoryData.kill} /{matchHistoryData.defeat} /
            {matchHistoryData.assist}</div>
          <div className="kda">{matchHistoryData.kda}</div>
        </div>

        <div className="levelStats">
          <div>Level {matchHistoryData.level}</div>
          <div className="statsFigures">{matchHistoryData.cs} CS</div>
          <div>{matchHistoryData.kp}% KP</div>
        </div>

        <div className="spellImageContainer">
          <div className="spellImageRowOne">
            <img
              src={`/images/${matchHistoryData.spellIconOne}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconSeven}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconThree}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconFour}`}
              alt="spellIcon"
              className="spellImage"
            />
          </div>
          <div className="spellImageRowTwo">
            <img
              src={`/images/${matchHistoryData.spellIconFive}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconSix}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconSeven}`}
              alt="spellIcon"
              className="spellImage"
            />
            <img
              src={`/images/${matchHistoryData.spellIconEight}`}
              alt="spellIcon"
              className="spellImage"
            />
          </div>
        </div>

        <div className="matchedUserContainer">
          <div className="matchedUserRow">
            <div>{matchHistoryData.firstPlayerName}</div>
            <img
              src={`/images/${matchHistoryData.firstPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <img
              src={`/images/${matchHistoryData.secondPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <div>{matchHistoryData.secondPlayerName}</div>
          </div>
          <div className="matchedUserRow">
            <div>{matchHistoryData.firstPlayerName}</div>
            <img
              src={`/images/${matchHistoryData.firstPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <img
              src={`/images/${matchHistoryData.secondPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <div>{matchHistoryData.secondPlayerName}</div>
          </div>
          <div className="matchedUserRow">
            <div>{matchHistoryData.firstPlayerName}</div>
            <img
              src={`/images/${matchHistoryData.firstPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <img
              src={`/images/${matchHistoryData.secondPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <div>{matchHistoryData.secondPlayerName}</div>
          </div>
          <div className="matchedUserRow">
            <div>{matchHistoryData.firstPlayerName}</div>
            <img
              src={`/images/${matchHistoryData.firstPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <img
              src={`/images/${matchHistoryData.secondPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <div>{matchHistoryData.secondPlayerName}</div>
          </div>
          <div className="matchedUserRow">
            <div>{matchHistoryData.firstPlayerName}</div>
            <img
              src={`/images/${matchHistoryData.firstPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <img
              src={`/images/${matchHistoryData.secondPlayerAvatar}`}
              className="firstPlayerAvatar"
            />
            <div>{matchHistoryData.secondPlayerName}</div>
          </div>
        </div>
        <div className="analysisDetailsSection">
          <div className="analysisText">Analysis</div>
          <div className="detailsText">Details</div>
        </div>
      </div>
    </>
  );
}
