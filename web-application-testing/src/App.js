import React, { useState } from 'react';
import './App.css';
import Display from "./Display";

// HANDLER FUNCTIONS //


function App() {
  //IF I HAVE TIME, REFACTOR THESE INTO A CUSTOM HOOK
const [strikeCount, setStrikeCount] = useState(0);
const [ballCount, setBallCount] = useState(0);
const [foulCount, setFoulCount] = useState(0);

  return (
    <div className="App">

      <Display 
        strikeCount={strikeCount}
        ballCount={ballCount}
        foulCount={foulCount}
        />
      
    </div>
  );
}

export default App;
