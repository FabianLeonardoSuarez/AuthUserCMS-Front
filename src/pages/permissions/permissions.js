import React, { Component } from 'react';
import "./permissions.scss";
import Listdata from "../../components/listdata/listdata";
import UserService from '../../services/UserService';

class Permissions extends Component{
    state = {
        permisoslist: [],        
    };

    componentDidMount(){
        this.getUserList();
    }

    getUserList() {
        const dataObj = new UserService();
        dataObj.getPermissions().then((data) => {
          if (data) {              
            this.setState({                
                permisoslist: data,              
            });            
          }
        });    
    }

    render(){
        return(
            <div>
                <h3>Adminitracion de Permisos</h3>                
                <Listdata data={this.state.permisoslist}/> 
                <br/>
            </div>
        );
    }
}

export default Permissions;