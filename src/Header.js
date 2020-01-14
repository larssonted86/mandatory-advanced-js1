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
      marginTop: '15px',
      border: 'none',
      borderRadius: '45px',
      height: '40px',
      width: '200px',
      backgroundColor: 'lightblue',
      color: 'white',
      fontSize: '30px',

    }

    const headerStyle = {
      backgroundColor: 'lightblue',
      color: 'white',
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
