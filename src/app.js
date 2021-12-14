
import React from 'react';
import Header from './components/todo/Header';
import Settings from './components/todo/Context/Context';
import ToDo from './components/todo/todo';

export default class App extends React.Component {
  render() {
    return (
        <Settings>
        {/* <Header /> */}

      <ToDo />
      </Settings>
    );
  }
}