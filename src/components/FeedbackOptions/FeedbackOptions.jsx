import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.feedbackBtList}>
      {Object.keys(options).map((option, id) => (
        <li key={id}>
          <button
            className={styles.feedbackBtn}
            name={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
