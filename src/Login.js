import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false,
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            login: true
        })
    }

    onClick(e) {
        this.setState({
            login: true
        })
    }

    componentDidMount() {
        this.setState({
            login: false,
        })
    }

    render() {
        if (this.state.login) {
            return <Redirect to='/chat' />;
        }



        return (

            <div style={loginStyle} >
                <h1 style={{ color: '#BFA47B' }}>Login</h1>
                <form onSubmit={this.onSubmit} style={{ alignItems: 'center' }}>
                    <input
                        type='text'
                        placeholder='username'
                        onChange={this.props.setUsername}
                        style={inputStyle}></input>

                </form>
                <button style={buttonStyle} onClick={this.onClick}>Enter chatroom  ----------------------------></button>
            </div>
        )
    }
}

////////////////////////STYLES///////////////////////////////////////
const loginStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '303030',
    padding: '150px',
}

const inputStyle = {
    paddingLeft: '15px',
    borderTop: 'none',
    borderLeft: 'none',
    borderRight: 'none',
    backgroundColor: '#303030',
    borderBottom: '1px #BFA47B solid ',
    height: '40px',
    width: '400px',
    fontSize: '25px',
    color: '#BFA47B',

}

const buttonStyle = {
    padding: 'none',
    marginTop: '15px',
    border: 'none',
    borderRadius: '45px',
    height: '40px',
    width: '4200px',
    backgroundColor: '#303030',
    color: '#BFA47B',
    fontSize: '24px'
}

export default Login

