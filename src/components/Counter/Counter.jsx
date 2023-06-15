import React, { Component } from "react";
import Statistics from "components/Statistics/Statistics";

class Counter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      prevState[option] += 1;
    });
    console.log(this.state)
  };



  render() {
    const options = Object.keys(this.state);
    const counterBtns = options.map(option =>
      <button type="button" key={option} onClick={() => this.onLeaveFeedback(option)}>
        {option.charAt(0).toUpperCase() + option.slice(1)}
      </button>
    );
    
    return (
      <>
        <h2>Please leave your feedback</h2>
        <div>
          {counterBtns}
        </div>
        <Statistics items={this.state} />
      </>
      
    );
  };
};

export default Counter;
