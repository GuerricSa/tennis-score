export const setPlaying = (playing) => ({
  type: 'setPlaying',
  payload: playing,
 })

export const restart = () => ({ type: 'restart' })

export const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player }
})

export const randomSet = (store) => {
  const isPlaying = store.getState().playing;
  const winner = store.getState().winner
  if (isPlaying || winner) {
    console.log('isPlaying = true randomSet ne marche pas')
    return
  }
  console.log(isPlaying)
  store.dispatch(setPlaying(true))

  playNextPoint()
  console.log(isPlaying)

  function playNextPoint() {
    const time = 1000 + Math.floor(Math.random() * 2000)
    if (store.getState().playing === false) {
      return
    }
    window.setTimeout(() => {
      if(store.getState().playing === false) {
        return
      }
    const pointWinner = Math.random() > 0.5 ? 'player1' : 'player2'
    store.dispatch(pointScored(pointWinner))
    if (store.getState().winner) {
      store.dispatch(setPlaying(false))
    }
    playNextPoint()
  }, time)
  }
}
