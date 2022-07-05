import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
  state = {
    habits:[{ id: 1, name: '本を読む', count: 0},
            { id: 2, name: '運動をする', count: 0},
            { id: 3, name: '勉強をする', count: 0},
    ],
  };
  render() {
    return (
      <ul>
        {this.state.habits.map(habit => (
          <Habit key={habit.id} habit={habit} />
        ))}
      </ul>
    );
  }
}

export default Habits;