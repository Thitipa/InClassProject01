import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "bootstrap/dist/css/bootstrap.min.css";
import FormLogin from './FormLogin';

function Login() {
  return (
    <div className="container">
      <div className="row">
        <Card className="col-12 col-md-8" style={{backgroundColor:"#2F3237",color:"white"}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Welcome back!
            </Typography>
            <span style={{color:"#C5C5C5"}}>We're so excited to sleep again 😴 </span>
            <Typography variant="body2" >
                <FormLogin/>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
