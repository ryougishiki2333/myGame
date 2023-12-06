import React from 'react';
import './App.css';

const App: React.FC = () => {
  const gridSize = 10;

  const renderGrid = () => {
    const grid = [];
  
    for (let i = 0; i < gridSize * gridSize; i++) {
      const cellId = `cell-${i}`;
      grid.push(<div key={cellId} className="cell" id={cellId}></div>);
    }
  
    return grid;
  };

  return (
    <div className="main">
      <div className="side"></div>
      <div className="grid">{renderGrid()}</div>
      <div className="side"></div>
    </div>
  );
};

export default App;