import React, { Component } from 'react';
import "./login.scss";
import UserService from '../../services/UserService';
import AuthenticationService from '../../services/autentication/autentication';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {            
            username: "", 
            password: "",
        };
        this.loginuser = this.loginuser.bind(this);        
    }

    loginuser(event) {
        const dataObj = new UserService();
        if(this.state.username !== "" && this.state.password !== "")
        dataObj.loginuser(this.state.username,this.state.password).then((token) => {
          if (token) {              
            console.log(token);           
            const AutService = new AuthenticationService(); 
            AutService.login(token);            
          } else {
              alert("usuario o contraseña incorrecta");
          }
        });   
        event.preventDefault(); 
    }

    render(){
        return(
        <div className='loginbox'>
            <form onSubmit={this.loginuser}>
                <h1>ArandaSoft</h1><br/>
                <label for="username">Usuario</label><br/>
                <br/>
                <input type="text" id="username" name="username" onChange={event => this.setState({username: event.target.value})} required/><br/>
                <br/>
                <label for="password">Contraseña</label><br/>
                <br/>
                <input type="password" id="password" name="password" onChange={event => this.setState({password: event.target.value})} required/><br/>
                <br/>
                <input type="submit" value="Acceder" />         
            </form>            
        </div>       
        );
    }
}

export default Login;