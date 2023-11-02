import { configureStore } from 'redux'

const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true
}

// Action creator
const playPause = () => ({ type: 'playPause' })
const restart = () => ({ type: 'restart' })
const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player }
})


function reducer(state, action) {
  if(action.type === 'playPause') {
    return {
      ...state,
      playing: !state.playing
    }
  }
  if(state.playing === true) {
    if (action.type === 'restart') {
      return (
        initialState
      )
    }
    if(action.type === 'pointScored') {
      const player = action.payload.player
      const otherPlayer = player === 'player1' ? 'player2' : 'player1'
      if (state.winner) {
        return state;
      }
      const currentPlayerScore = state[player]
      if (currentPlayerScore <= 15) {
        return {
          ...state,
          [player]: currentPlayerScore + 15
        }
      }
      if (currentPlayerScore === 30) {
        return {
          ...state,
          [player]: 40
        }
      }
      if (currentPlayerScore === 40) {
        if (state.advantage === player) {
          return {
            ...state,
            winner: player
          }
        }
        if (state.advantage === otherPlayer) {
          return {
            ...state,
            advantage: null
          }
        }
        if ( state[otherPlayer] === 40) {
          return {
            ...state,
            advantage: player
          }
        }
        return {
          ...state,
          winner: player
        }
      }
    }
  }
  return state;
}


const store = configureStore(reducer, initialState)
