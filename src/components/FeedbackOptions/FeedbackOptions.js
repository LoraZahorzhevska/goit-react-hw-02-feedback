import React from 'react';
// import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <button
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
