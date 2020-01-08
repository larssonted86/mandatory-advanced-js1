import React from 'react';
import io from 'socket.io-client';
import './App.css';
import Listen from './Listen.js';
import Write from './Write.js';
const socket = io('http://3.120.96.16:3000');

socket.on('connect', function() {
  console.log('connected');
});
socket.on('messages', function(data) {
  console.log(data);
});
socket.on('new_message', function(data) {
  console.log(data);
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Listen />
      </div>
    );
  }
}

export default App;
