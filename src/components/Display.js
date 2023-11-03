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
  const historical = useSelector((state) => state.historical)
  const player2wins = historical.filter(object => object.winner === 'player2').length
  const player1wins = historical.filter(object => object.winner === 'player1').length


  if (winner) {
    return (
      <div>
        <p>Le joueur 1 a remporté {player1wins} matchs</p>
        <p>Le joueur 2 a remporté {player2wins} matchs</p>
        <p className="display">
          {`Le ${playerSelector(winner)} a gagné !!`}
        </p>
      </div>
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
    <div>
      <div>
        <p>Le joueur 1 a remporté {player1wins} matchs</p>
        <p>Le joueur 2 a remporté {player2wins} matchs</p>
      </div>
      <div className="display">
      le score est de : {scorePlayer1} - {scorePlayer2}
      {advantage !== null ? `avantage :  ${playerSelector(advantage)}` : '' }
      </div>
    </div>
  )
}
