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

  onSubmit(e) {
    e.preventDefault();
    socket.emit('message', {
      username: this.props.username,
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

////////////////////////STYLES///////////////////////////////////////

const inputStyle = {
  paddingLeft: '15px',
  border: 'none',
  backgroundColor: '#BFA47B',
  height: '40px',
  width: '95%',
  fontSize: '25px',
  color: '#303030',
  borderRadius: '45px',
  marginLeft: '15px'
};



const formStyle = {
  backgroundColor: '#303030',
  padding: '5px',
  height: '40px',
}
export default Write;


