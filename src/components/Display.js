import { useSelector } from "react-redux"

const playerSelector = (params) => {
  if (params === 'player1') {
    return (
      'joueur 1'
    )
  } else {
    return (
      'joueur 2'
    )
  }
}

export function Display() {
  const gameIsPlaying = useSelector((state) => state.playing)
  const scorePlayer1 = useSelector((state) => state.player1)
  const scorePlayer2 = useSelector((state) => state.player2)
  const advantage = useSelector((state) => state.advantage)
  const winner = useSelector((state) => state.winner)

  if (winner) {
    return (
      <p className="display">
        {`Le ${playerSelector(winner)} a gagné !!`}
      </p>
    )
  }
  if (!gameIsPlaying) {
    return (
      <p className="display">
        Le jeu est en pause
      </p>
    )
  }
  return (
    <div className="display">
      le score est de : {scorePlayer1} - {scorePlayer2}
      <div>
      {advantage !== null ? `avantage :  ${playerSelector(advantage)}` : '' }
      </div>
    </div>
  )
}
