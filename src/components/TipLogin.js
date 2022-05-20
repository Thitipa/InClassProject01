import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Box, Button } from "@mui/material";
import Dis from "../images/discord_logo.png"
import { Nav, NavItem } from 'reactstrap';
import { NavLink, Switch } from 'react-router-dom';

function TipLogin() {
  return (
    <div>
      <Nav
        className="d-flex justify-content-between navbar navbar-light bg-light"
        style={{ position:"fixed", width:"100%" , paddingLeft:"50px" , paddingRight:"50px", bgcolor: "white", color: "black" }}
      >
        <div> <img src={Dis} alt="discord" width={50}></img>Due Today, Do Tomorrow</div>
        <Nav pills><NavItem
          style={{
            color: "black",
            backgroundColor: "#E5E5E5",
            border: "none",
            width: "120px",
            height: "40px",
            textAlign:"center",
            textJustify:"center",
            borderRadius: "10px",
            marginRight: "20px"
          }}
        >
          Login
        </NavItem>
        <NavItem
          style={{
            color: "black",
            backgroundColor: "#E5E5E5",
            border: "none",
            width: "120px",
            height: "40px",
            textAlign:"center",
            textJustify:"center",
            borderRadius: "10px",
          }}
          
        >
          Home
        </NavItem>
        </Nav>
        
      </Nav>
    </div>
  );
}

export default TipLogin;
