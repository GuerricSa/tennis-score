import './App.css';
import { PlayPauseButton } from './components/PlayPauseButton'
import { Display } from './components/Display'
import { Restart } from './components/RestartButton'
import { PointScoredButton } from './components/PointScoredButton';

function App() {
  return (
    <div>
      <Display />
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
