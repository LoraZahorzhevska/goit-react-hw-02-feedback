import React from 'react';

class Feedback extends React.Component {
  //   state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,

  //     this.changesValueGood = this.changesValueGood.bind(this);
  //   };

  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    this.changesValueGood = this.changesValueGood.bind(this);
    this.changesValueNeutral = this.changesValueNeutral.bind(this);
    this.changesValueBad = this.changesValueBad.bind(this);
  }

  changesValueGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  changesValueNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  changesValueBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>

        <button type="button" onClick={this.changesValueGood}>
          Good
        </button>
        <button type="button" onClick={this.changesValueNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.changesValueBad}>
          Bad
        </button>

        <p>Statistics</p>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
