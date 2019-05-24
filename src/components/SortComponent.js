import React from "react";
import "./SortComponent.css";

export function SortComponent({ matchHistory, setMatchHistory }) {
  return (
    <div className="SortComponent">
      <div
        className="SortComponent_child"
        onClick={() => setMatchHistory(sortMatchesBy(matchHistory, "KDA"))}
      >
        KDA
      </div>
      <div
        className="SortComponent_child"
        onClick={() => setMatchHistory(sortMatchesBy(matchHistory, "Duration"))}
      >
        Duration
      </div>
      <div
        className="SortComponent_child"
        onClick={() =>
          setMatchHistory(sortMatchesBy(matchHistory, "MatchType"))
        }
      >
        Match Type
      </div>
      <div
        className="SortComponent_child"
        onClick={() => setMatchHistory(sortMatchesBy(matchHistory, "Result"))}
      >
        Result
      </div>
    </div>
  );
}

function sortMatchesBy(matches, comparator) {
  switch (comparator) {
    case "KDA":
      return matches.sort((a, b) => getKDA(b) - getKDA(a));
    case "Duration":
      return matches.sort((a, b) => getSeconds(b.time) - getSeconds(a.time));
    case "MatchType":
      return matches.sort((a, b) =>
        a.matchType > b.matchType ? 1 : b.matchType > a.matchType ? -1 : 0
      );
    case "Result":
      return matches.sort((a, b) =>
        a.isVictory === b.isVictory ? 0 : a.isVictory ? -1 : 1
      );
    default:
      return matches;
  }
}

function getKDA(match) {
  return Number((match.kill + match.assist) / match.defeat);
}

function getSeconds(time) {
  let timeElements = time.split(":");
  let seconds = 0;
  //match went for more than one hour
  if (timeElements.length === 3) {
    seconds += Number(timeElements[0]) * 3600;
    seconds += Number(timeElements[1]) * 60;
    seconds += Number(timeElements[2]);
  } else {
    seconds += Number(timeElements[0]) * 60;
    seconds += Number(timeElements[1]);
  }
  return seconds;
}
