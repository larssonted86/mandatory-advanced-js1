import React from 'react';
import io from 'socket.io-client';
const socket = io('http://3.120.96.16:3000');


class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Ted',
      message: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    socket.emit('message', {
      username: this.state.username,
      content: this.state.message,
    })
    this.setState({
      message: ''
    })
  }

  onChange(e) {
    this.setState({ message: e.target.value })
  }
  render() {
    const inputStyle = {
      border: 'solid 1px black',
      borderRadius: '45px',
      height: '25px',
      width: '300px',
      paddingLeft: '15px'
    };

    const formStyle = {
      backgroundColor: 'lightblue',
      padding: '5px'
    }
    return (
      <form style={formStyle} onSubmit={this.onSubmit}>
        <input
          type="text"
          id="userMessage"
          placeholder="message: "
          style={inputStyle}
          onChange={this.onChange}
          value={this.state.message}
        />
      </form>
    );
  }
}
export default Write;
