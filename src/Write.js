import React from 'react';
import io from 'socket.io-client';
const socket = io('http://3.120.96.16:3000');


class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  //prevents the default behavior, then checks the message length, then sets the correct info that will be sent, then resets the state.message
  onSubmit(e) {
    e.preventDefault();
    if (this.state.message.length <= 200) {
      socket.emit('message', {
        username: this.props.username,
        content: this.state.message,
      })
      this.setState({
        message: ''
      })
    } else {
      alert('that message is too long!')
    }
  }

  //sets state.message to be the value of the target when a key is pressed
  onChange(e) {
    this.setState({ message: e.target.value })
  }

  render() {
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
        <p style={textStyle}>{this.state.message.length}/200</p>
        <button style={buttonStyle}>Send</button>
      </form>
    );
  }
}

////////////////////////STYLES///////////////////////////////////////

const inputStyle = {
  paddingLeft: '15px',
  border: 'none',
  backgroundColor: '#BFA47B',
  height: '40px',
  width: '460px',
  fontSize: '25px',
  color: '#303030',
  borderRadius: '45px',
  marginLeft: '10px'
};



const formStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#303030',
  padding: '15px',
  height: '40px',
}
const textStyle = {
  color: '#BFA47B',
  marginTop: '15px',
}

const buttonStyle = {
  color: '#BFA47B',
  backgroundColor: '#303030',
  border: '1px solid #BFA47B',
  borderRadius: '45px',
  width: '60px',

}
export default Write;


