class Configvariables {
    APIURL = '';
    READUSERS = 'ReadUsers';
    DELETEUSER = 'DeleteUser';
    UPDATEUSER = 'UpdateUser';
    CREATEUSER = 'CreateUser';
    READUSERINFO = 'ReadUserInfo'; 
    READUSERPERMISSIONS = 'ReadUserPermissions';
    COMPONENTUSERPERMISSIONS = 'ComponentPermissions';
    FEATUREPERMISSIONS = 'FeaturePermissions';
    LOGINUSER = 'Login';  
    READROLES = 'ReadRoles';  
    READPERMISSIONS = 'ReadPermissions';  

    constructor() {
        this.APIURL = "https://localhost:44353/"        
    }
}
export default Configvariables;