import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
import {Card,CardBody,CardText} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import FormLogin from "./FormLogin";
import UnableLogin from "./UnableLogin";

function Login() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* <div className="row d-flex justify-content-end"> */}
      <Card
        className="col-12 col-lg-8 row d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "#2F3237", color: "white", margin: "0 auto"}}
      >
        <div className="row d-flex justify-content-center align-items-center" >
        {/* <CardContent className="col-7"> */}
        <CardText className="col-7">
          {/* <Typography variant="body2"> */}
            <FormLogin />
          {/* </Typography> */}
        </CardText>
          
        {/* </CardContent> */}

        {/* <CardContent className="col-5" style={{ height: "100%" }}> */}
        <CardText className="col-5" style={{ height: "100%" }}>
          <UnableLogin />
        </CardText>
        {/* </CardContent> */}
        </div>
      </Card>
    </div>
  );
}

export default Login;
