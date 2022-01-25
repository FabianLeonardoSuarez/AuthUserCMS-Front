import logo from './logo.svg';
import './globalstyles/global.scss';
import React, { useState, useEffect, Component } from "react";
// import { useNavigate } from "react-router-dom";
import {authenticationService} from './services/autentication/autentication';
import Login from './pages/login/login';
import WorkDesk from "./layouts/workdesk";

export default function App({ pageProps }) {

  const [state, setState] = useState({
    authed: false,
  });

  // const navigate = useNavigate();

  if (sessionStorage.getItem('user-token') != undefined) {
    return (
      <WorkDesk>
        <Component {...pageProps} />
      </WorkDesk>
    )
  }else{
    return(
      <Login />
    )
  }
}
