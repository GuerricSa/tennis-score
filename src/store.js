import { createStore } from 'redux'
import { produce } from 'immer'

const initialState = {
  player1: 0,
  player2: 0,
  advantage: null,
  winner: null,
  playing: true,
  historical: [
  ]
}

function reducer(state, action) {
  if(action.type === 'playPause') {
    return produce(state, draft => {
      draft.playing = !draft.playing
    })
  }
  if(state.playing === true) {
    if (action.type === 'restart') {
      return produce(state, draft => {
        draft.player1 = 0
        draft.player2 = 0
        draft.advantage = null
        draft.winner = null
        draft.playing = true
      })
    }
    if(action.type === 'pointScored') {
      const player = action.payload.player
      const otherPlayer = player === 'player1' ? 'player2' : 'player1'
      if (state.winner) {
        return state;
      }
      const currentPlayerScore = state[player]
      if (currentPlayerScore <= 15) {
        return produce(state, draft => {
          draft[player] = currentPlayerScore + 15
        })
      }
      if (currentPlayerScore === 30) {
        return produce(state, draft => {
          draft[player] = 40
        })
      }
      if (currentPlayerScore === 40) {
        if (state.advantage === player) {
          return produce(state, draft => {
            draft.winner = player
            draft.historical.push({[player]: currentPlayerScore, [otherPlayer]: state[otherPlayer], winner: player})
          })
        }
        if (state.advantage === otherPlayer) {
          return produce(state, draft => {
            draft.advantage = null
          })
        }
        if ( state[otherPlayer] === 40) {
          return produce(state, draft => {
            draft.advantage = player
          })
        }
        return produce(state, draft => {
          draft.winner = player
          draft.historical.push({[player]: currentPlayerScore, [otherPlayer]: state[otherPlayer], winner: player})
        })
      }
    }
  }
  return state;
}

export const store = createStore(reducer, initialState)

store.subscribe(() => {
  console.log("Nouveau state:");
  console.log(store.getState());
});
