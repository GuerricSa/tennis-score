import './App.css';
import { PlayPauseButton } from './components/PlayPauseButton'
import { Display } from './components/Display'
import { Restart } from './components/RestartButton'
import { PointScoredButton } from './components/PointScoredButton';
import { PlayerScore } from './components/PlayerScore';
import { PlayerPoints } from './components/PlayerPoints';

function App() {
  return (
    <div>
      <PlayerPoints playerId={'player1'} playerName={'player 1'}/>
      <PlayerPoints playerId={'player2'} playerName={'player 2'}/>
      <Display />
      <PlayerScore playerId={'player1'} playerName={'player 1'}/>
      <PlayerScore playerId={'player2'} playerName={'player 2'}/>
      <div className="buttons-row">
        <PointScoredButton playerId={'player1'}>
          Point joueur 1
        </PointScoredButton>
        <PointScoredButton playerId={'player2'}>
          Point joueur 2
        </PointScoredButton>
      </div>
      <div className="buttons-row">
        <PlayPauseButton />
        <Restart />
      </div>
    </div>
  );
}

export default App;
