import React, { useEffect, useState, createContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import UserContainer from "./components/UserContainer";
import MatchHistoryContainer from "./components/matchHistoryContainer";
import UserStatisticContainer from "./components/userStatisticContainer";
import CircularProgressContainer from "./components/circularProgressContainer";

export const AppContext = createContext(null);

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    fetch("/mock/user.json")
      .then(resp => resp.json())
      .then(_data => setState(_data));
  }, []);

  const value = {
    state
  };
  const leftLayout = (
    <>
      <UserContainer />
      <UserStatisticContainer />
      <CircularProgressContainer data={state}/>
    </>
  );
  return (
    <AppContext.Provider value={value}>
      <div className="App">
        <Layout left={leftLayout} right={<MatchHistoryContainer />} />

        <UserStatisticContainer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
