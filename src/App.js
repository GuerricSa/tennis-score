import './App.css';
import { createStore } from "https://cdn.skypack.dev/redux@4.0.5";

function App() {
  const initialState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true
  }
  const store = createStore(reducer, initialState)

  const score = document.getElementById('score')
  const player1Button = document.getElementById('player-1')
  const player2Button = document.getElementById('player-2')
  const resetButton = document.getElementById('reset')
  const playPauseButton = document.getElementById('pause')

  player1Button.addEventListener("click", () => {

  })

  player2Button.addEventListener("click", () => {

  })

  resetButton.addEventListener("click", () => {

  })

  playPauseButton.addEventListener("click", () => {
    store.dispatch(playPause())
  })

  function updateScoreText(
    playing,
    winner = null,
    player1Score = 0,
    player2Score = 0,
    advantage = null
  ){
    if(winner) {
      if (winner === "player1") {
        score.innerHTML = "Joueur 1 gagne"
      } else {
        score.innerHTML = "Joueur 2 gagne"
      }
    } else if ( playing === false) {
      score.innerHTML = "c'est la pause"
    } else {
      let text = `Le score est: ${player1Score} - ${player2Score}`
      if (advantage) {
        if (advantage === "player1") {
          score.innerHTML = 'avantage joueur 1'
        } else {
          score.innerHTML = 'avantage joueur 2'
        }
      }
      score.innerHTML = text
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

  return (
<div>
  <p className="display" id="score">Le score est: 0 - 0</p>
  <div className="buttons">
    <div className="buttons-row">
      <button className="button" id="player-1">Point Joueur 1</button>
      <button className="button" id="player-2">Point Joueur 2</button>
    </div>
    <div className="buttons-row">
      <button className="button" id="reset">Remettre à zéro</button>
      <button className="button" id="pause">Pause / Reprendre</button>
    </div>
  </div>
</div>
  );
}

export default App;
