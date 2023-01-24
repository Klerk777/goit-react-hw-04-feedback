import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';
import styles from './App.module.scss';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickBtn = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   return Math.round((good / this.countTotalFeedback()) * 100);
  // };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeadback = this.countTotalFeedback();

    return (
      <div className={styles.appCpntainer}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleClickBtn}
          />
        </Section>

        <Section title="Statistic">
          {totalFeadback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
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
}
