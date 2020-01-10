import React from 'react';
import './App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageHistory: []
      // newMessage: ''
    };
  }

  render() {
    const headerStyle = {
      backgroundColor: 'lightblue',
      color: 'white',
      border: 'solid White 1px'
    };
    return (
      <div className="Header" style={headerStyle}>
        <h1> EC CHAT</h1>
      </div>
    );
  }
}

export default Header;
