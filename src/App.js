import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BugApp from './components/bug-app';
import Calculator from './components/calculator';
import PostsConnector from './connector/posts-connector';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <BugApp/>
		<Calculator/>
		<PostsConnector/>
      </div>
    );
  }
}

export default App;
