import React from 'react';
import "./users.scss";
import Listdata from "../../components/listdata/listdata";
import UserService from '../../services/UserService';
import CreateRegister from '../../components/createregister/createregister';

class Users extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            componentPermissions : [],  
            featurePermissions : [],           
            userlist: [],
            namefilter: "",
            rolfilter: "",
        };
        this.getUserList = this.getUserList.bind(this);
        this.getComponentPermissions = this.getComponentPermissions.bind(this);
        this.getFeaturePermissions = this.getFeaturePermissions.bind(this);
        this.filtername = this.filtername.bind(this);
        this.filterRol = this.filterRol.bind(this);
        this.IsAllowed = this.IsAllowed.bind(this);
        this.IsFeature = this.IsFeature.bind(this);
    }
    
    idComponent = 2;

    getUserList() {
        const dataObj = new UserService();
        dataObj.getUsers().then((data) => {
          if (data) {              
            this.setState({
                userlist: data,                                
            });            
          }
        });    
    }

    getComponentPermissions() {
        const dataObj = new UserService();

        dataObj.getComponentPermissions(this.idComponent).then((data) => {
          if (data) {
              console.log(data); 
              let permissions = [];
              data.map(x=>{
                permissions.push({IdPermission: x.IdPermission, PermissionName: x.PermissionName});
              });   
            this.setState({
                componentPermissions: permissions,                                
            });
            this.IsAllowed(1) && this.getUserList();            
          }
        });    
    }

    getFeaturePermissions() {
        const dataObj = new UserService();

        dataObj.getFeaturePermissions(this.idComponent).then((data) => {
          if (data) {
              console.log(data); 
              let permissions = [];
              data.map(x=>{
                permissions.push({IdFeature: x.IdFeature, FeatureName: x.FeatureName});
              });   
            this.setState({
                featurePermissions: permissions,                                
            });
            this.IsFeature(1) && this.getUserList();            
          }
        });    
    }    

    getUserList() {
        const dataObj = new UserService();
        dataObj.getUsers().then((data) => {
          if (data) {              
            this.setState({
                userlist: data,                                
            });            
          }
        });    
    }

    IsAllowed(idPermission){
        return this.state.componentPermissions.find(x=>x.IdPermission == idPermission);
    }

    IsFeature(idFeature){
        return this.state.featurePermissions.find(x=>x.IdFeature == idFeature);
    }

    componentDidMount() {
        this.getComponentPermissions();
        this.getFeaturePermissions();                     
    }

    createuser(userobj){        
        const dataObj = new UserService();
        dataObj.createuser(userobj).then((data) => {
          if (data) {         
            console.log("createuser");     
            console.log(data);
            this.getUserList();
          }
        }); 
    }

    edituser(userobj){        
        const dataObj = new UserService();
        dataObj.edituser(userobj).then((data) => {
          if (data) {         
            console.log("edituser");     
            console.log(data);
            this.getUserList();
          }
        }); 
    }

    deleteuser(idUser){        
        const dataObj = new UserService();
        dataObj.deleteUser(idUser).then((data) => {
          if (data) {         
            console.log("deleteuser");     
            console.log(data);        
            this.getUserList();
          }
        }); 
    }

    filtername(){
        if(this.state.namefilter == "")
        {
            this.getUserList();
        }else{            
            let listado = [];
            JSON.parse(JSON.stringify(this.state.userlist)).map(x=>{
                if(x.UserName.includes(this.state.namefilter))
                listado.push(x);
            });            
            this.setState({userlist: listado});
        }
    }

    filterRol(){
        if(this.state.rolfilter == "")
        {
            this.getUserList();
        }else{            
            let listado = [];
            JSON.parse(JSON.stringify(this.state.userlist)).map(x=>{
                if(x.RolName.includes(this.state.rolfilter))
                listado.push(x);
            });            
            this.setState({userlist: listado});
        }
    }

    render(){   
        return(        
            <div>
                <h3>Adminitracion de Usuarios</h3>
                {this.state.userlist.length > 0 && this.IsAllowed(2) && <CreateRegister baseObj={this.state.userlist[0]} createfn={this.createuser} />}
                <div className='filterbox'>
                {this.IsFeature(1) && <>
                <input placeholder='Filtrar por Nombre' type="text" value={this.state.namefilter} onChange={(event)=>this.setState({namefilter : event.target.value})} />
                <div className='filterbutton' onClick={this.filtername}>                
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                </div></>            
                }
                {this.IsFeature(2) && <>
                <input placeholder='Filtrar por Rol' type="text" value={this.state.rolfilter} onChange={(event)=>this.setState({rolfilter : event.target.value})} />
                <div className='filterbutton' onClick={this.filterRol}>                
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
                </div></>            
                }
                </div>
                <Listdata 
                data={this.state.userlist} 
                canedit={this.IsAllowed(3)}
                editfn={this.edituser} 
                candelete={this.IsAllowed(4)}
                deletefn={this.deleteuser}
                /> 
                <br/>
            </div>
        );    
    }
}

export default Users;