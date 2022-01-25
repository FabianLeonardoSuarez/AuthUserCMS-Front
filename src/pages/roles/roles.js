import React, { Component } from 'react';
import "./roles.scss";
import Listdata from "../../components/listdata/listdata";
import UserService from '../../services/UserService';

class Roles extends Component{
    state = {
        roleslist: [],        
    };

    componentDidMount(){
        this.getUserList();
    }

    getUserList() {
        const dataObj = new UserService();
        dataObj.getRoles().then((data) => {
          if (data) {              
            this.setState({                
                roleslist: data,              
            });            
          }
        });    
    }

    render(){
        return(
            <div>
                <h3>Adminitracion de Roles</h3>                
                <Listdata data={this.state.roleslist}/> 
                <br/>
            </div>
        );
    }
}

export default Roles;