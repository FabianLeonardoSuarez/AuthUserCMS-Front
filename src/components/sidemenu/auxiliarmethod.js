import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Menuroutes from "../../layouts/menuroutes";

const Auxiliarmethod = () => {
    const location = useLocation();  

    function IsSelected(NombreRuta) {
                  
        var Cadena1 = GetPath(NombreRuta);
        var Cadena2 = location.pathname;
        return Cadena1.toString().trim() === Cadena2.toString().trim()
          ? true
          : false;
    }
    
    function GetPath(Nombre) {
        return Menuroutes.filter((Ruta) => Ruta.name.includes(Nombre))[0].path;
    }

    return(<></>);
}

export default Auxiliarmethod