import React, { useState, useEffect } from 'react';
import "./editregister.scss";

const EditRegister = (props) => {    
    const [ModalMode, setModalMode] = useState(false);
    const [NewObj, setNewObj] = useState({});
    const [hadFirst, sethadFirst] = useState(false);
    const [KeyNames, setKeyNames] = useState([]);
    const submitfn = ()=>{        
        props.edit(NewObj);
        setModalMode(false);
    };

    const handleChange = (event) => 
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        const tempObj = JSON.parse(JSON.stringify(NewObj));
        tempObj[name] = value;
    
        setNewObj(tempObj);
        sethadFirst(false);
        console.log(NewObj);        
    }

    useEffect(() => {             
        let tempkeynames = [];        
        let tempNewobj = {};
        Object.keys(props.actualobj).map(x=> { if(!x.includes("Editar") && !x.includes("Eliminar")){
            tempkeynames.push(x.toString());
            tempNewobj[x] = props.actualobj[x];
        }});       

        tempkeynames.splice(tempkeynames.indexOf("IdUser"), 1);
        
        setKeyNames(tempkeynames);
        setNewObj(tempNewobj);
        sethadFirst(true);
      }, hadFirst);

        const showHideClassName = ModalMode ? "modal display-block" : "modal display-none";        
        
        const formulario = KeyNames.map((key)=>{
            return <div className='campo'>
                <label for={key}>{key}</label>
                <input type="text" id={key} name={key} value={NewObj[key]} onChange={handleChange} required/>
            </div>            
        }); 
        
        return(            
            <>
            <div className={showHideClassName}>
                <div className="cookiesContent" id="cookiesPopup">                                    
                    <button className="close" onClick={()=> setModalMode(false)}>✖</button> 
                    <h2>Editar Registro</h2>
                    <form onSubmit={submitfn}>
                    {formulario}
                    <div className='btnarea'>                        
                        <div className='btn cancel' onClick={()=> setModalMode(false)}> Cancelar </div>
                        <button className='btn ok' type='submit'> Guardar </button>                           
                    </div> 
                    </form>                                        
                     
                </div>
            </div>
            <div className='editOption' onClick={()=> setModalMode(true)}>
       <svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">    
    <title>edit</title>    
    <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Rounded" transform="translate(-579.000000, -2771.000000)">
            <g id="Image" transform="translate(100.000000, 2626.000000)">
                <g id="-Round-/-Image-/-edit" transform="translate(476.000000, 142.000000)">
                    <g transform="translate(0.000000, 0.000000)">
                        <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                        <path d="M3,17.46 L3,20.5 C3,20.78 3.22,21 3.5,21 L6.54,21 C6.67,21 6.8,20.95 6.89,20.85 L17.81,9.94 L14.06,6.19 L3.15,17.1 C3.05,17.2 3,17.32 3,17.46 Z M20.71,7.04 C21.1,6.65 21.1,6.02 20.71,5.63 L18.37,3.29 C17.98,2.9 17.35,2.9 16.96,3.29 L15.13,5.12 L18.88,8.87 L20.71,7.04 Z" id="🔹-Icon-Color" fill="#1D1D1D"></path>
                    </g>
                </g>
            </g>
        </g>
    </g>
        </svg>
            </div>
            </> 
        ); 
    
}

export default EditRegister;