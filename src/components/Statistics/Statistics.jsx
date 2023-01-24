import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistic.module.scss';
import image from '../../images/1695725.png';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <div className={styles.statisticWrap}>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
      <img src={image} alt="cup of cofee" width="100px" />
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
