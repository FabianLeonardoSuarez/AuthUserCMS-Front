import React from 'react';
import "./listdata.scss";
import DeleteRegister from '../deleteregister/deleteregister';
import EditRegister from '../editregister/editregister';

const Listdata = (props) => {
    if(props.data !== undefined && props.data.length > 0)
    {       
    let tablevalues = JSON.parse(JSON.stringify(props.data));

    tablevalues.map(row=>{
        props.canedit && props.editfn && (row["Editar"] = <EditRegister actualobj={row} edit={(newObj) => props.editfn(newObj)} />);
        props.candelete && props.deletefn && (row["Eliminar"] = <DeleteRegister delete={() => {props.deletefn(row.IdUser)}} />);
    });

    let headertittles = Object.keys(tablevalues[0]);
    const header = headertittles.map(rowname => {
        return <th>{rowname}</th>
    });

    let tableSlice =
    tablevalues.map(row=>{
        return <tr>
        {Object.values(row).map(val=>{
            return <td>{val}</td>
        })}                
        </tr>
    });
        
    return (<>
            <table className='ListTable'>
                <tr>{header}</tr>
                {tableSlice}
            </table>   
    </>);
    }else{
       return <></>
    }
};
export default Listdata;
