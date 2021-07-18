import React from 'react';

import { Statistics } from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import s from './Feedback.module.css';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  onLeaveFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;

    return Math.round((good * 100) / (good + neutral + bad)) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const objKey = Object.keys(this.state);
    return (
      <div>
        <p className={s.text}>Please leave feedback</p>

        <FeedbackOptions
          options={objKey}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification />
        ) : (
          <Statistics
            countGood={good}
            countNeutral={neutral}
            countBad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default Feedback;
