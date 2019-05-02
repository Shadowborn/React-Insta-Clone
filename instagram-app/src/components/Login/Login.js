import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLoginSubmit = event => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    };

    render(){
        return (
            <>
            <form className="login" onSubmit={this.handleLoginSubmit}>
                <input className="loginuser" 
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                />
                <input className="loginpass" 
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                />
            
            <input className="loginbutton" type="submit" value="Submit"/>
            </form>
            </>
        );
    }
}

export default Login;