import { useSelector } from "react-redux";
import { selectPlayerPoints } from "../selectors";

export function PlayerPoints({ playerId, playerName }) {
  const points = useSelector(selectPlayerPoints(playerId))

  return (
    <div className="player-games">
      <p>{playerName}</p>
      <p>
        {points === 0
        ? 'aucun jeu gagné'
        : points === 1
          ? '1 jeu gagné'
          : points + 'jeux gagnés'}
      </p>
    </div>
  )
}
