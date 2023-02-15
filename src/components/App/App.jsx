import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import styles from './App.module.scss';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = { good, neutral, bad };

  const handleClickBtn = e => {
    const { name } = e.target;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const totalFeadback = Object.values(feedbacks).reduce(
    (previousValue, number) => {
      return previousValue + number;
    },
    0
  );

  return (
    <div className={styles.appCpntainer}>
      <Section title="Please leave your feedback">
        <FeedbackOptions options={feedbacks} onLeaveFeedback={handleClickBtn} />
      </Section>

      <Section title="Statistic">
        {totalFeadback ? (
          <Statistics
            feedbacks={feedbacks}
            total={totalFeadback}
            positivePercentage={
              totalFeadback && Math.round((good / totalFeadback) * 100)
            }
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}
