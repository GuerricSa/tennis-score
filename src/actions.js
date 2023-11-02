export const playPause = () => ({ type: 'playPause' })
export const restart = () => ({ type: 'restart' })
export const pointScored = (player) => ({
  type: 'pointScored',
  payload: { player: player }
})
