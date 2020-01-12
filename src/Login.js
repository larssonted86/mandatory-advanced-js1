import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input type='text' placeholder='username'></input>
                </form>
            </div>
        )
    }
}

export default Login

