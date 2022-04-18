import React from 'react';
import './App.css';

import GameContextProvider from './contexts/GameContext';
import Board from './components/Board';

function App() {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
}

export default App;
