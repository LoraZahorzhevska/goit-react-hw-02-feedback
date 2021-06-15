import React from 'react';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = {
      good: this.props.initialValue,
      neutral: this.props.initialValue,
      bad: this.props.initialValue,
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

  countTotalFeedback = review => () => {
    this.setState({ [review]: this.state[review] + 1 });

    // const { good, neutral, bad } = this.state;

    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad)) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <p>Please leave feedback</p>

        <button
          type="button"
          onClick={(this.changesValueGood, this.countTotalFeedback('good'))}
        >
          Good
        </button>
        <button
          type="button"
          onClick={
            (this.changesValueNeutral, this.countTotalFeedback('neutral'))
          }
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={(this.changesValueBad, this.countTotalFeedback('bad'))}
        >
          Bad
        </button>

        <p>Statistics</p>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:{good + neutral + bad}</li>
          <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
