import React, { useState, useEffect } from 'react';
import './App.css';

function Box({ id, color, content, onClick }) {
  return (
    <div
      className="box"
      style={{ backgroundColor: color }}
      onClick={() => onClick(id)}
    >
    <p>{ content }</p>
    </div>
  );
}


function App() {
  const [boxes, setBoxes] = useState([]);
  const [counter, setCounter] = useState(0);
  const [latestBoxes, setLatestBoxes] = useState([]);


  useEffect(() => {
    const newBoxes = [];
    for (let index = 0; index < 16; index++) {
      newBoxes.push({
        id: index,
        color: 'blue',
      })
    }
    setBoxes(newBoxes);
  }, []);

  const handleClick = (id) => {
    if(boxes[id].content) return;
    const newBoxes = boxes.slice(0);
    const newLatestBoxes = latestBoxes.slice(0);
    console.log(newBoxes);
    if(latestBoxes.length === 2) {
      newBoxes[newLatestBoxes[0]].color = 'blue'
      newLatestBoxes.shift();
    }
    newLatestBoxes.push(id);
    setLatestBoxes(newLatestBoxes);
    newBoxes[id].color = 'red'
    newBoxes[id].content = `Box #${counter + 1}`;
    setCounter(counter + 1);
    console.log(newBoxes === boxes);
    setBoxes(newBoxes);
  };

  return (
    <div className="App">
      <h1 className='title'>Matrix Game</h1>
      <div className='boxes-container'>
        {boxes.map((box) => (
          <Box key={box.id} {...box} onClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default App;
