import { useSelector } from "react-redux"
import { selectPlayerHasAdvantage, selectPointsToWin } from "../selectors"

export function PlayerScore({ playerName, playerId}) {
  const score = useSelector((state) => state[playerId])
  const hasAdvantage = useSelector(selectPlayerHasAdvantage(playerId))
  const pointsBeforeWin = useSelector(selectPointsToWin(playerId))

  return (
    <div className="player-score">
      <p>
        {playerName}  
        {pointsBeforeWin === null
        ? ''
        : `encore ${pointsBeforeWin} ${pointsBeforeWin === 1
          ? 'point'
          : 'points'
        }` }
      </p>
      <p>{(hasAdvantage ? 'avantage - ' : '') + score}</p>
    </div>
  )
}
