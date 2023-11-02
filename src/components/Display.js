import { useSelector } from "react-redux"

export function Display() {
  const gameIsPlaying = useSelector((state) => state.playing)

  return (
    <p>
      {gameIsPlaying ? 'Jeu en cours' : "c'est la pause"}
    </p>
  )
}
