import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/game'

const App = () => (
  <div >
    <Game />
  </div>

);

ReactDOM.render(<App />, document.getElementById("app"));