import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import FormLogin from "./FormLogin";

function Login() {
  return (
    <div className="container ">
      <div className="row d-flex justify-content-center align-items-center" style={{minHeight:"100vh"}}>
        <Card
          className="col-12 col-md-8 myCard"
          style={{ backgroundColor: "#2F3237", color: "white" }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="col-7 d-flex justify-content-center"
            >
              Welcome back!
            </Typography>
            <p
              style={{ color: "#C5C5C5" }}
              className="col-7 d-flex justify-content-center"
            >
              We're so excited to sleep again 😴
            </p>
            <Typography variant="body2">
              <FormLogin />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
