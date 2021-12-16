
import React from 'react';
import ToDo from './components/todo/todo';
import Settings from './components/context/Settings';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  render() {
    return (
     <Settings>
        <ToDo />
     </Settings>
    );
  }
}