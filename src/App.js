import React, { useState } from 'react';
// import Input from './components/Input';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';

const btns = [
  ["AC", "±", "%", "÷"],
  [7, 8, 9, "×"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];

function App() {
  const [ val, setVal ] = useState(0);
  const [ display, setDisplay ] = useState("0");

  // const handleChange = e => {
  //   let input = e.target.value;
  //   setVal(input);
  // }

  const handleBtn = (v) => {
    let _v;

    switch(v) {
      case "AC":
        return handleClear();
      case "=":
        let answer = handleSolve(val);
        console.log()
        setVal(answer);
        setDisplay(answer);
        return;
      case "×":
        _v = val + "*";
        break;
      case "÷":
        _v = val + "/";
        break;
      case "+":
        _v = val + "+";
        break;
      case "-":
        _v = val + "-";
        break;
      default:
        _v = val + v;
    }
    setVal(_v)
    setDisplay(_v)
  }

  const handleClear = () => {
    setVal(0);
    setDisplay("");
  }

  const handleSolve = (str) => {
    return Function(`'use strict'; return (${str})`)()
  }

  return (
    <div className="App">
      {/* <Input value={val} onChange={handleChange} /> */}
      <Display value={display} />
      <div className="pad">
        {btns.map(row => {
          return <div className="row" key={row}>
            {row.map(btn => <Button key={btn} symbol={btn} onClick={() => handleBtn(btn)}/>)}
            </div>
        })}
        </div>
      </div>
  );
}

export default App;
