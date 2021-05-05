import './App.css';
import Clock from './components/Clock';


function App() {

  // it looks like the correct react way to do this is to use .map to render
  // a lot of components, and then display them??
  let timerObject = {
    {
      stage: 1,
      time: 10,
      description: '10 seconds, whats going to happen'
    },
    {
      stage: 1,
      time: 180,
      description: '3 minutes go'
    }
  }

  return (
    <div className="App">

      <header className="App-header">
        <Clock time={timerObject} />

      </header>
    </div>
  );
}

export default App;
