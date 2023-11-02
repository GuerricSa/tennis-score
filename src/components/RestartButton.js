import { useDispatch } from "react-redux"
import { restart } from '../actions'

export function Restart() {
  const dispatch = useDispatch(restart)
  return (
    <button
    onClick={() => {dispatch()}}
    >
      Remettre à zéro
    </button>
  )
}
