import React from 'react';
import s from './FeedbackOptions.module.css';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
        className={s.button}
        key={shortid.generate()}
        type="button"
        name={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
