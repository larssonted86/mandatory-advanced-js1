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
        const loginStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'lightgrey',
            padding: '150px',
        }

        const inputStyle = {
            paddingLeft: '15px',
            border: 'none',
            borderRadius: '45px',
            height: '40px',
            width: '250px',
            fontSize: '25px'
        }

        const buttonStyle = {
            marginTop: '15px',
            border: 'none',
            borderRadius: '45px',
            height: '40px',
            width: '200px',
        }
        return (

            <div style={loginStyle}>
                <h1>Login</h1>
                <form onSubmit={this.onSubmit} style={{ alignItems: 'center' }}>
                    <input
                        type='text'
                        placeholder='username'
                        onChange={this.props.setUsername}
                        style={inputStyle}></input>

                </form>
                <button style={buttonStyle} onClick={this.onClick}>Enter</button>
            </div>
        )
    }
}

export default Login

