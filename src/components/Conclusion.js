import {
    Card
  } from "reactstrap";
  import React from "react";
import { margin } from "@mui/system";

  const Conclude = ({ title, desc, date }) => {
    return (
      <div className="d-flex justify-content-center" style={{margin:"40px"}}>
        <Card style={{width:"25%",height:" 200px",}}>
            <p>To-dos</p>
        </Card>
        <Card style={{width:"25%",height:" 200px",marginLeft:"5%"}}>
           <p>To-dos</p>
        </Card>
        <Card style={{width:"25%",height:" 200px",marginLeft:"5%"}}>
            <p>To-dos</p>
        </Card>
      </div>
    );
  };
  
  export default Conclude;