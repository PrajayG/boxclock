import React from "react";
import Timer from 'easytimer';

import "./Clock.css";

let timer = new Timer();
timer.addEventListener('secondsUpdated', function (e) {
  let element = document.querySelector('#basicUsage');
  element.innerHTML = timer.getTimeValues().toString();
});



timer.start({
  countdown: true,
  startValues: { seconds: 180 }
});

export default class Clock extends React.Component {

  // https://reactjs.org/docs/handling-events.html
  // This is 'experimental' syntax that I'm using here, normally you put this
  // in a constructor class and binding this
  pauseTimer = (e) => {
    timer.pause();
  }

  render() {
    return (
      <div className="clock">
        <h1>🥊 Box Clock🥊 </h1>
        <h1 id="basicUsage">00:00:00</h1>
        <h1>{this.props.time}</h1>
        <div className="clock__button-panel">
          <button id="start">Start</button>
          <button onClick={this.pauseTimer} id="pause">Pause</button>
        </div>

      </div>
    );
  }
}
