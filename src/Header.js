import React from 'react';
import { Redirect } from 'react-router-dom'

import './App.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false
    };
    this.closeApp = this.closeApp.bind(this)
  }
  closeApp(e) {
    this.setState({
      close: true
    })
  }

  componentDidMount() {
    this.setState({
      close: false,
    })
  }

  render() {
    if (this.state.close) {
      return <Redirect to='/' />;
    }

    const buttonStyle = {
      marginTop: '20px',
      border: 'none',
      borderRadius: '45px',
      height: '40px',
      width: '200px',
      backgroundColor: '#2E3440',
      color: '#81A1C1',
      fontSize: '30px',

    }

    const headerStyle = {
      backgroundColor: '#2E3440',
      color: '#81A1C1',
      border: 'solid White 1px',
      display: 'flex',
      paddingLeft: '20px',
    };
    return (
      <div className="Header" style={headerStyle}>
        <h1> EC CHAT</h1>
        <button
          onClick={this.closeApp}
          style={buttonStyle}>Close</button>
      </div>
    );
  }
}

export default Header;
