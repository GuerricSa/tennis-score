import './App.css';
import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";
import { useState } from 'react'

function App() {
  const [scoreText, setScoreText] = useState('Le score est 0 - 0')
  const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true
  }
  const store = createStore(reducer, initialState)

  const score = document.getElementById('score')
  console.log(score)

  const player1Action = () => {

  }

  const player2Action = () => {

  }

  const resetAction = () => {

  }

  const playPauseAction = () => {
    store.dispatch(playPause())
  }

  function updateScoreText(
    playing,
    winner = null,
    player1Score = 0,
    player2Score = 0,
    advantage = null
  ){
    if(winner) {
      if (winner === "player1") {
        setScoreText("Joueur 1 gagne")
      } else {
        setScoreText("Joueur 2 gagne")
      }
    } else if ( playing === false) {
      setScoreText("C'est la pause")
    } else {
      let text = `Le score est: ${player1Score} - ${player2Score}`
      if (advantage) {
        if (advantage === "player1") {
          setScoreText("Avantage joueur 1")
        } else {
          setScoreText("Avantage joueur 2")
        }
      }
      setScoreText(text)
    }
  }

  const playPause = () => ({ type: 'playPause' })

  function reducer(state, action) {
    if(action.type === 'playPause') {
      return {
        ...state,
        playing: !state.playing
      }
    }
    return state;
  }

  // store.subscribe(
  //   () => {
  //     const state = store.getState()
  //     updateScoreText(state)
  //   }
  // )

  return (
<div>
  hello OpenClassrooms
</div>
  );
}

export default App;
