import React from 'react';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handelLogin=()=>{
        // console.log(this.props);
        this.props.history.push('/main-page');
    }

    render(){
        return(
            <div className="login-container">
                <header><h1>Login</h1></header>
                <div className="login">
                    <div className="username">
                        <h3>Username</h3>
                        <input type="text" onChange={e=>this.setState({username:e.target.value})} />
                    </div>
                    <div className="password">
                        <h3>Password</h3>
                        <input type="password" onChange={e=>this.setState({password:e.target.value})} />
                    </div>
                    <div className="submit">
                        <input type="button" value="Login" onClick={this.handelLogin} />
                    </div>
                </div>
            </div>
        )
    }
}