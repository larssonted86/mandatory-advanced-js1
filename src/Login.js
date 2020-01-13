import React, { Component } from 'react'

export class Login extends Component {
    render() {
        onSubmit(e){
            
        }
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit = {onSubmit}>
                    <input type='text' placeholder='username'
                        onChange={this.props.setUsername}></input>
                </form>
            </div>
        )
    }
}

export default Login

