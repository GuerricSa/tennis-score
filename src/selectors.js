export const selectPlayerHasAdvantage = (playerId) => {
  return(
    (state) => state.advantage === playerId
  )
}

export const selectGameIsPlaying = () => (state) => state.playing

export const selectPlayerPoints = (playerId) => {
  return(
    (state) => state.historical.filter((object) => object.winner === playerId).length
  )
}

export const selectPointsToWin = (playerId) => {
  const oponent = playerId === 'player1' ? 'player2' : 'player1'
  return (
    (state) => {
      if (state.winner) {
        return null
      } else if(state.advantage === playerId) {
        return 1
      } else if (state[oponent] === 40) {
        if (state[playerId] === 40) {
          return 2
        } else if (state[playerId] === 30) {
          return 3
        } else if (state[playerId] === 15) {
          return 4
        } else {
          return 5
        }
      } else {
        if (state[playerId] === 40) {
            return 1
        } else if (state[playerId] === 30) {
          return 2
        } else if (state[playerId] === 15) {
          return 3
        } else {
          return 4
        }
      }
    }
  )
}

export const selectDisplayText = (state) => {
  let text = `Le score est : ${state.player1} - ${state.player2}`
  if(state.winner) {
      if (state.winner === 'player1') {
        return 'Joueur 1 gagne'
      } else {
        return 'Joueur 2 gagne'
      }
  } else {
    if (state.advantage) {
      if (state.advantage === 'player1') {
        text += "avantage joueur 1"
      } else {
        text += "avantage joueur 2"
      }
    }
  }
  return text
}
