import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import React from "react";
import SideMenu from "../components/sidemenu/sidemenu"
import Userbar from "../components/userbar/userbar"
import Menuroutes from "./menuroutes";
import "./workdesk.scss";

export default function WorkDesk() {
    return(
    <Router>
      <div className="main">        
        <Userbar />
        <div className="flex">
          <SideMenu />
          <div className="content">
            <Routes>
              {/* <Route path="/" element={} /> */}
              {Menuroutes.filter(x=>x.public==false).map(({ path: path1, name, Component}, key) => (
                <Route
                  path={path1}                
                  key={key}
                  element={<Component />}
                />
              ))}
            </Routes>
          </div>
        </div>

      </div>
    </Router>
    )
}