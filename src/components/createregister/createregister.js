import React, { useState, useEffect } from 'react';
import "./createregister.scss";

const CreateRegister = (props) => {    
    const [ModalMode, setModalMode] = useState(false);
    const [NewObj, setNewObj] = useState({});
    const [hadFirst, sethadFirst] = useState(false);
    const [KeyNames, setKeyNames] = useState([]);
    const submitfn = ()=>{        
        props.createfn(NewObj);
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
        Object.keys(props.baseObj).map(x=> { if(!x.includes("Editar") && !x.includes("Eliminar")){
            tempkeynames.push(x.toString());
            tempNewobj[x] = "";
        }});       
        
        (tempkeynames.indexOf("IdUser")!== -1) && tempkeynames.splice(tempkeynames.indexOf("IdUser"), 1);
        
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
                <div className="createContent" id="cookiesPopup">                                    
                    <button className="close" onClick={()=> setModalMode(false)}>✖</button> 
                    <h2>Nuevo Registro</h2>
                    <form onSubmit={submitfn}>
                    {formulario}
                    <div className='btnarea'>                        
                        <div className='btn cancel' onClick={()=> setModalMode(false)}> Cancelar </div>
                        <button className='btn ok' type='submit'>Crear Registro </button>                        
                    </div> 
                    </form>                                        
                </div>
            </div>
            <div className='createOption' onClick={()=> setModalMode(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            <h4>Crear Nuevo Registro</h4>
            </div>
            </>
        );
    
}

export default CreateRegister;