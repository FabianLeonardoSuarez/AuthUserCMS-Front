import Wellcomenews from "../pages/wellcomenews/wellcomenews"
import Users from "../pages/users/users"
import Permissions from "../pages/permissions/permissions"
import Roles from "../pages/roles/roles"
import Login from "../pages/login/login"

export default [
    { path: "/", name: "Home", Component: Wellcomenews, IdComponent: 1, public: false },    
    { path: "/Users", name: "Usuarios", Component: Users, IdComponent: 2, public: false},
    { path: "/Permissions", name: "Permisos", Component: Permissions, IdComponent: 3, public: false},
    { path: "/Roles", name: "Roles", Component: Roles, IdComponent: 4, public: false},
];