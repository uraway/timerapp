import React from "react";
import ReactDom from "react-dom";


  class Timer extends React.Component {

    constructor() {
      super();
      this.tick = this.tick.bind(this);
    	this.state = {
        secondsElapsed: 0,
        isStart: false
      }
    }

    tick() {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });
    }

    start() {
      if(!this.state.isStart) {
        this.interval = setInterval(this.tick, 1000);
        this.setState({
          isStart: true
        });
      }
    }

    stop() {
      if(this.state.isStart){
        clearInterval(this.interval);
        this.setState({
          isStart: false
        });
      }
    }

    reset() {
      clearInterval(this.interval);
      this.setState({
        secondsElapsed: 0,
        isStart: false,
      });
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return (
        <div>
          Seconds Elapsed: {this.state.secondsElapsed}
          <br />
            <button onClick={this.start.bind(this)}>start</button>
            <button onClick={this.stop.bind(this)}>stop</button>
            <button onClick={this.reset.bind(this)}>reset</button>
          <br />
        </div>
      );
    }
  }

  ReactDOM.render(Timer />, document.getElementById('container'));
