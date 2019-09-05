import React, { useState } from 'react';
import './App.css';
import Display from "./Display";
import Dashboard from "./Dashboard";




function App() {
  //IF I HAVE TIME, REFACTOR THESE INTO A CUSTOM HOOK
const [strikeCount, setStrikeCount] = useState(0);
const [ballCount, setBallCount] = useState(0);
const [foulCount, setFoulCount] = useState(0);

// HANDLER FUNCTIONS //
const strikes = () => {
    if (strikeCount < 2) {
      setStrikeCount(strikeCount+1);
    } else {
      setStrikeCount(0);
    }
  }

  const balls = () => {
    if (ballCount < 3) {
      setBallCount(ballCount+1);
    } else {
      setBallCount(0);
    }
  }

  const fouls = () => {
    if (strikeCount < 2) {
      setStrikeCount(strikeCount+1);
    }
  }

  const hit = () => {
    setStrikeCount(0);
    setBallCount(0);
  }

  return (
    <div className="App">

      <Display 
        strikeCount={strikeCount}
        ballCount={ballCount}
        foulCount={foulCount}
        />

        <Dashboard 
        strikes={strikes}
        balls={balls}
        fouls={fouls}
        hit={hit}
        />
      
    </div>
  );
}

export default App;
