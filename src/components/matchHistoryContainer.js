import React, { useContext, useState, useEffect } from "react";
import MatchHistory from "./matchHistory";
import { AppContext } from "../App";
import { SortComponent } from "../components/SortComponent";
import filterIcon from "../images/filter.svg";
import Loading from "./loading";

export default function MatchHistoryContainer(data) {
  const [showSort, setshowSort] = useState(false);
  const [matchHistory, setMatchHistory] = useState([]);
  const { state } = useContext(AppContext);

  useEffect(()=>{
      if(!state) return;
    setMatchHistory(state.matchHistory)
  },[state]);

  const markup = matchHistory.length ? (
    matchHistory.map(match => <MatchHistory matchHistoryData={match} />)
  ) : (
    <Loading />
  );

  return (
    <>
      <div className="banner">
        <div className="bannerHeader">Match History</div>
        <div
          className="bannerStatsContainer"
          onClick={() => {
            setshowSort(!showSort);
          }}
        >
          <img src={filterIcon} alt="filterIcon" class="filterIcon" />
          {showSort ? <SortComponent matchHistory={matchHistory} setMatchHistory={setMatchHistory} /> : null}
        </div>
      </div>
      {markup}
    </>
  );
}
