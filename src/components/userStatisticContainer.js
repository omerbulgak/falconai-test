import React, { useContext } from "react";
import UserStatistic from "./userStatistic";
import { UserStrengths } from "./userStrengths";
import { AppContext } from "../App";
import Loading from "./loading";

export default function UserStatisticContainer(data) {
    const { state } = useContext(AppContext);
    const markup =
        state ? (
            state.bestHeroes.map(bestHero => (
                <UserStatistic key={bestHero.id} bestHero={bestHero} />
            ))
        ) : (
                <Loading />
            );
    return (
        <div className="userStatContainer">
            <div className="userStatContainer_bestHeroes">{markup}</div>
            <UserStrengths data={{}} />
        </div>
    );
}
