import React, { useState } from 'react';
import Display from './components/Display';
import './App.css';

function App() {

  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const trackBalls = () => {
    if (balls === 4) {
      setStrikes (0);
      setBalls (0);
    } else {
      setBalls (balls +1)
    }
  }

  const trackStrikes = () => {
    if(strikes === 3) {
      setStrikes (0);
      setBalls (0);
    } else {
      setStrikes (strikes +1);
    }
  }

  const trackFouls = () => {
    if (strikes === 2){
      setStrikes (2);
    } else {
      setStrikes (strikes + 1);
    }
  }

  const hits = () => {
    setStrikes (0);
    setBalls (0);
  }

  return (
    <div className="App">
      <Display className='App' />
      <button onClick={trackStrikes}>
        Strike
      </button>
      <button onClick={hits}>
        Hit
      </button>
      <button onClick={trackFouls}>
        Foul
      </button>
      <button onClick={trackBalls}>
        Ball
      </button>
    </div>
  );
}

export default App;