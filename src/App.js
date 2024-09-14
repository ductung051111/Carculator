import React from 'react';
import Display from './components/Display';
import Keypad from './components/Keypad';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [result, setResult] = useState("");


  const handleClick = (number) => {
    if (number === '=') {
      if (result !== "") {
        try {
          setResult((eval(result)).toString());
        } catch (error) {
          setResult("Lỗi");
        }
      }
    } else if (number === 'Clear') {
      setResult("");
    } else if (number === 'Delete') {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + number);
    }
  }

  return (
    <div className="calculator">
      <Display result={result} />
      <Keypad handleClick={handleClick} />
    </div>
  );
}

export default App;