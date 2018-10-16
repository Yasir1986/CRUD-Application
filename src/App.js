import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
          <UserList />
      </div>
    </Provider>
    );
  }
}

export default App;
