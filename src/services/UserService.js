import Configvariables from "./configvariables";

/**
 * Servicio que trae la data del servicio Usuarios
 */

class UserService {
    constructor(){
        this.configvariables = new Configvariables();
    }

    async callgetfetch(URL){        
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .catch((error) => {
            //this.handleError(error);
        });
    }

    async loginuser(username, password)
    {      
        const URL = this.configvariables.APIURL + this.configvariables.LOGINUSER;
        return fetch(URL + "?username=" + username + "&password=" + password)
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });            
    }

    async getUsers()
    {      
        const URL = this.configvariables.APIURL + this.configvariables.READUSERS;
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async createuser(userobj)
    {      
        const URL = this.configvariables.APIURL + this.configvariables.CREATEUSER;        
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"),{ method : "POST", headers: { 'Content-Type': 'application/json' } , body: JSON.stringify(userobj) })
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async edituser(userobj)
    {      
        const URL = this.configvariables.APIURL + this.configvariables.UPDATEUSER;        
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"),{ method : "PUT", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(userobj) })
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async deleteUser(idUser)
    {      
        const URL = this.configvariables.APIURL + this.configvariables.DELETEUSER;
        return fetch(URL + "?delUserId=" + idUser + "&Token=" + sessionStorage.getItem("user-token"),{ method : "DELETE" })
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    
    async getComponentPermissions(idComponent)
    {      
        console.log(idComponent);
        const URL = this.configvariables.APIURL + this.configvariables.COMPONENTUSERPERMISSIONS;
        return fetch(URL + "?idComponent=" + idComponent.toString() + "&Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async getFeaturePermissions(idComponent)
    {      
        console.log(idComponent);
        const URL = this.configvariables.APIURL + this.configvariables.FEATUREPERMISSIONS;
        return fetch(URL + "?idComponent=" + idComponent.toString() + "&Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async getUserInfo()
    {      
        const URL = this.configvariables.APIURL + this.configvariables.READUSERINFO;
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }

    async getUserPermissions()
    {      
        const URL = this.configvariables.APIURL + this.configvariables.READUSERPERMISSIONS;
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });           
    }
    
    async getRoles()
    {      
        const URL = this.configvariables.APIURL + this.configvariables.READROLES;
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });              
    }

    async getPermissions()
    {      
        const URL = this.configvariables.APIURL + this.configvariables.READPERMISSIONS;
        return fetch(URL + "?Token=" + sessionStorage.getItem("user-token"))
        .then((response)=>{return response.json();})
        .then((json) => {return json;})
        .catch((error) => {
            //this.handleError(error);
        });              
    }
}

export default UserService;