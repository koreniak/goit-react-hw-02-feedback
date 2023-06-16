import React, { Component } from "react";
import CounterBtns from "./CounterButtons/CounterButtons";
import Statistics from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return prevState[option] += 1
    });
    console.log(this.state);
  };

  render() {
    return (
      <>
        <CounterBtns options={Object.keys(this.state)} title="Please leave Feedback" onClick={this.onLeaveFeedback} />
        <Statistics options={Object.keys(this.state)} stateItems={this.state} title="Statistics" />
      </>
    );
  };
};