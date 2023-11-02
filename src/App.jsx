import './App.css';
import { PlayPauseButton } from './components/PlayPauseButton'
import { Display } from './components/Display'
import { Restart } from './components/RestartButton'

function App() {
  return (
    <div>
      <Display />
      <PlayPauseButton />
      <Restart />
    </div>
  );
}

export default App;
