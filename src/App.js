import React from 'react';
import io from 'socket.io-client';
import Login from './Login.js'
import ChatContainer from './chatContainer.js';
import Header from './Header.js';
import Write from './Write.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const socket = io('http://3.120.96.16:3000');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      username: ''
    };
    this.setUsername = this.setUsername.bind(this)
  }
  setUsername(e) {
    this.setState({
      username: e.target.value
    })
    console.log(this.state.username)
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
    return (<Router>
      <div className="App">
        <Route path="/" exact render={() => <Login setUsername={this.setUsername} />} />
        <Route path="/chat" render={() => <Header />} />

        <Route path="/chat" render={() => <ChatContainer history={this.state.history} />} />
        <Route path="/chat" render={() => <Write username={this.state.username} />} />






      </div>
    </Router>
    );
  }
}

export default App;
