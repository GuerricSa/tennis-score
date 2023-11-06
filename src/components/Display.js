import { selectDisplayText } from "../selectors"
import { useSelector } from "react-redux"

export const playerSelector = (params) => {
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
  const displayText = useSelector(selectDisplayText)
  return (
    <div>
      <p className="display">
        {displayText}
      </p>
    </div>
  )
}
