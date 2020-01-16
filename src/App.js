import React from 'react';
import io from 'socket.io-client';
import Login from './Login.js'
import ChatContainer from './chatContainer.js';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
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

  //creates a function that allows one of the other components to change the state.username in this component. it will then be sent to that component in the render function
  setUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  //when component is mounted we collect the data from the server and sets that into the state.history array and when a new message is sent we remove the first index in the array and adds the new message to the end then re sets the state.history array
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
        <Route path="/" exact render={() => <Login setUsername={this.setUsername}
          username={this.state.username} />} />
        <Route path="/chat" render={() => <ChatContainer history={this.state.history}
          username={this.state.username} />} />

      </div>
    </Router>
    );
  }
}

export default App;
