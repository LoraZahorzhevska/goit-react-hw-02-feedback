import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends React.Component {
  render() {
    const { countGood, countNeutral, countBad, total, positivePercentage } =
      this.props;
    return (
      <>
        <p className={s.text}>Statistics</p>
        <ul className={s.statistics}>
          <li>Good:{countGood}</li>
          <li>Neutral:{countNeutral}</li>
          <li>Bad:{countBad}</li>
          <li>Total:{total}</li>
          <li>Positive feedback:{positivePercentage}%</li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  countGood: PropTypes.number.isRequired,
  countNeutral: PropTypes.number.isRequired,
  countBad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  //   total: PropTypes.func.isRequired,
  //   PositiveFeedback: PropTypes.func.isRequired,
  PositiveFeedback: PropTypes.func,
};
