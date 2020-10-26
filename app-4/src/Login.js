import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            username: "",
            password: ""
        }

        this.loginAction = this.loginAction.bind(this)
    }
    changeUsername(name){
        this.setState({username: name})
    }
    
    changePassword(password){
        this.setState({password: password})
    }

    loginAction () {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    
    
    
    render(){
        return (
            <div>
                <input onChange={e => this.changeUsername(e.target.value)} type='text'/>
                <input onChange={e => this.changePassword(e.target.value)} type='text'/>
                <button onClick={this.loginAction}>Login</button>


            </div>


        )
    }






}

export default Login