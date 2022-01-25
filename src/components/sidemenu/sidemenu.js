import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "./sidemenu.scss";
import Menuroutes from "../../layouts/menuroutes";
import UserService from '../../services/UserService';

const Sidemenu = () => {
    const location = useLocation();
    const [hadData, sethadData] = useState(false);
    const [MenuItems, setMenuItems] = useState([]);

    function isSelected(NombreRuta) {        
        var Cadena1 = GetPath(NombreRuta);
        var Cadena2 = location.pathname;
        return Cadena1.toString().trim() === Cadena2.toString().trim()
          ? true
          : false;
      }

      function GetPath(Nombre) {
        return Menuroutes.filter((Ruta) => Ruta.name.includes(Nombre))[0].path;
      }

      useEffect(() => {             
        const dataObj = new UserService();
        dataObj.getUserPermissions().then((data) => {
          if (data) { 
            let ListAllowedItems = [];            
            Menuroutes.filter(x=>x.public==false).map(x=>{
                if(data.find(y=>y.IdComponent == x.IdComponent))
                ListAllowedItems.push(x);                
            });
            setMenuItems(ListAllowedItems);
            sethadData(true);
          }
        });            
      }, hadData);

        return(
        <div className='sidebar'>
            {MenuItems.map(({ path: path1, name, Component}) => (
                <Link to={path1} id={name}>
                    <div className={"menuitem " + (isSelected(name) ? "selected" : "")}>
                    {name}
                    </div>
                </Link>
            ))}
        </div>
        );

}

export default Sidemenu;