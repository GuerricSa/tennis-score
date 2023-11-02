import { useDispatch } from "react-redux"
import { playPause } from '../actions'

export function PlayPauseButton() {
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => {dispatch(playPause())}}
    >
      Pause/reprendre
    </button>
  )
}
