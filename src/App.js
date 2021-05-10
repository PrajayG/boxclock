import './App.css';
import React from 'react'
import Clock from './components/Clock';

// have two values in the class, one that controls the current step of the routine you are in
// and one that that is the steps actual values 

const timerObject = [
  {
    stage: 1,
    time: 10,
    description: '10 seconds, whats going to happen'
  },
  {
    stage: 2,
    time: 20,
    description: '3 minutes go'
  }
];


class App extends React.Component {

  state = { 
    routine: timerObject,
    currentStep: 0,
  };

  // it looks like the correct react way to do this is to use .map to render
  // a lot of components, and then display them??
  
  render() {
  return (
    <div className="App">

      <header className="App-header">
        <Clock time={this.state.routine[this.state.currentStep]} />

      </header>
    </div>
  );
  };
}

export default App;
