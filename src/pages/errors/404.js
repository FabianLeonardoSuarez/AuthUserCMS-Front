import React, { Component } from 'react';
class NotFound extends Component{
    render(){
        return <div id="notfound">
            <h1>oops!</h1>
            <h2>Error 404 : Page Not Found</h2>
            <button onClick={() => {document.location = "/"}}>Volver</button>
        </div>
    }
}