import React from 'react';
import io from 'socket.io-client';
import './App.css';
import Login from './Login.js'
import ChatContainer from './chatContainer.js';
import Header from './Header.js';
import Write from './Write.js';
const socket = io('http://3.120.96.16:3000');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      username: ''
    };
  }
  componentDidMount() {
    socket.on('messages', data => {
      this.setState({ history: data });
    });
    socket.on('new_message', data => {
      this.state.history.shift()
      this.state.history.push(data)
      this.setState({
        history: this.state.history,
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Login />
        <Header />
        <ChatContainer history={this.state.history} />        <Write />
      </div>
    );
  }
}

export default App;
