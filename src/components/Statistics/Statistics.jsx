import PropTypes from 'prop-types';
import styles from './Statistic.module.scss';
import image from '../../images/1695725.png';

function Statistics({ feedbacks, total, positivePercentage }) {
  return (
    <div className={styles.statisticWrap}>
      <ul>
        <li>Good: {feedbacks.good}</li>
        <li>Neutral: {feedbacks.neutral}</li>
        <li>Bad: {feedbacks.bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
      <img src={image} alt="cup of cofee" width="100px" />
    </div>
  );
}

Statistics.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
