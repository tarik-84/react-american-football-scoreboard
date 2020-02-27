//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import { useState } from "react";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
 const [homeScore, setHomeScore] = useState(0);  
 const [awayScore, setAwayScore] = useState(0);
 const [quarter, setQuarter] = useState(1);
 if(quarter > 4){
  setQuarter(1)
}

 const home__scoreTD = () => {
   setHomeScore(homeScore + 7)
 };
 
 const home__scoreFG = () => {
  setHomeScore(homeScore + 3)
};

const away__scoreTD = () => {
  setAwayScore(awayScore + 7)
};

const away__scoreFG = () => {
  setAwayScore(awayScore + 3)
};

const quarter_counter = () => {
  setQuarter(quarter + 1)
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter = {quarter} />
        </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick = {home__scoreTD}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick = {home__scoreFG}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick = {away__scoreTD}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick = {away__scoreFG}>Away Field Goal</button>
        </div>
        <div className="qurters">
          <button className="quarter-count" onClick = {quarter_counter}>QUARTER</button>
        </div>
      </section>
    </div>
  );
}

export default App;
