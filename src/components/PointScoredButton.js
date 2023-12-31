import { useDispatch } from "react-redux";
import { pointScored } from '../actions'

export function PointScoredButton({ playerId, children }){
  const dispatch = useDispatch()

  return (
      <button
        onClick={() => {dispatch(pointScored(playerId))}}
      >
        {children}
      </button>
  )
}
