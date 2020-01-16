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

  //function that sets the state.close to true 
  closeApp(e) {
    this.setState({
      close: true
    })
  }

  //when the component mounts the state.close is set to false
  componentDidMount() {
    this.setState({
      close: false,
    })
  }

  render() {
    //if state.close is true the user is returned to the login page
    if (this.state.close) {
      return <Redirect to='/' />;
    }
    return (
      <div className="Header" style={headerStyle}>
        <div style={h1DivStyle}>
          <h1> EC CHAT</h1>
        </div>
        <div style={buttonDivStyle}>
          <button
            onClick={this.closeApp}
            style={buttonStyle}>Close</button>
        </div>


      </div >
    );
  }
}


////////////////////////STYLES///////////////////////////////////////

const buttonStyle = {
  marginTop: '20px',
  border: 'none',
  borderRadius: '45px',
  height: '40px',
  width: '200px',
  backgroundColor: '#303030',
  color: ' #BFA47B',
  fontSize: '30px',

}

const headerStyle = {
  backgroundColor: '#303030',
  color: ' #BFA47B',
  borderBottom: 'solid #BFA47B 1px',
  display: 'flex',
  paddingLeft: '20px',
};

const buttonDivStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '15px',
  width: '100%'
}

const h1DivStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingRight: '15px',
  width: '250px'
}
export default Header;
