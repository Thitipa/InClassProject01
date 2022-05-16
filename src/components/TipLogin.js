import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box, Button } from "@mui/material";
import Dis from "../images/discord_logo.png"
function TipLogin() {
  return (
    <div>
      <Box
        className="d-flex justify-content-between"
        sx={{ p: 2, px: 10, bgcolor: "white", color: "black" }}
      >
        <div> <img src={Dis} alt="discord" width={50}></img>Due Today, Do Tomorrow</div>
        <div><button
          style={{
            color: "black",
            backgroundColor: "#E5E5E5",
            border: "none",
            width: "100px",
            height: "40px",
            borderRadius: "10px",
            marginRight: "20px"
          }}
        >
          Login
        </button>
        <button
          style={{
            color: "black",
            backgroundColor: "#E5E5E5",
            border: "none",
            width: "100px",
            height: "40px",
            borderRadius: "10px",
          }}
        >
          Home
        </button></div>
        
      </Box>
    </div>
  );
}

export default TipLogin;
