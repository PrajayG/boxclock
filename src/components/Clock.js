import React from "react";
import Timer from 'easytimer';

import "./Clock.scss";

let timer = new Timer();



timer.addEventListener('secondsUpdated', function (e) {
    let element = document.querySelector('#basicUsage');
    element.innerHTML = timer.getTimeValues().toString();
});

export default class Clock extends React.Component {
  // https://reactjs.org/docs/handling-events.html
  // This is 'experimental' syntax that I'm using here, normally you put this
  // in a constructor class and binding this

  pauseTimer = (e) => {
    this.timer.pause();
  }

    // lifecycle method
  componentDidMount() {
    // only initiate timer if routine calls for it
    let sendMethod = this.props.completed;
    console.log('component mounted');
    if (this.props.exercise.hasTimer) {
      timer.start({
        countdown: true,
        startValues: { seconds: this.props.exercise.duration }
      });

      timer.addEventListener('targetAchieved', function (e) {
        console.log(sendMethod());

      });
    }

  }

  render() {
    return (
      <div className="clock">
        <h1>{ this.props.exercise.workout}</h1>
        <h1 id="basicUsage">00:00:00</h1>
        <h1>{this.props.exercise.tips}</h1>
        <div className="clock__button-panel">
          <button id="start">Start</button>
          <button onClick={this.pauseTimer} id="pause">Pause</button>
        </div>

      </div>
    );
  }
}
