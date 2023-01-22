import PropTypes from 'prop-types';
import React, { Component } from 'react';

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
    let totalFeadback = 0;
    for (const key in this.state) {
      totalFeadback += this.state[key];
      return totalFeadback;
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <section>
          <h2>Please leave feedback</h2>
          <ul>
            <li>
              <button name="good" type="button" onClick={this.handleClickBtn}>
                Good
              </button>
            </li>
            <li>
              <button
                name="neutral"
                type="button"
                onClick={this.handleClickBtn}
              >
                Neutral
              </button>
            </li>
            <li>
              <button name="bad" type="button" onClick={this.handleClickBtn}>
                Bad
              </button>
            </li>
          </ul>
        </section>
        <section>
          <h2>Statistic</h2>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {this.totalFeadback}</li>
          </ul>
        </section>
      </div>
    );
  }
}
