import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@mui/material";
import {
  Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
// import barcode from "../images/image2.png";

class FormLogin extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <ModalBody>
          <div className="text-center">
            <Typography
              gutterBottom
              variant="h5"
              // component="div"
              // className="col-7 d-flex justify-content-center"
            >
              Welcome back!
            </Typography>
            <p
              style={{ color: "#C5C5C5" }}
              // className="col-7 d-flex justify-content-center"
            >
              We're so excited to sleep again 😴
            </p>
          </div>
          <Form onSubmit={this.handleLogin} style={{ color: "#C5C5C5" }}>
            <FormGroup>
              <Label htmlFor="username">EMAIL OR PHONE NUMBER</Label>
              <Input
                type="text"
                id="username"
                name="username"
                innerRef={(input) => (this.username = input)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">PASSWORD</Label>
              <Input
                type="password"
                id="password"
                name="password"
                innerRef={(input) => (this.password = input)}
              />
              <a href="#" style={{ textDecoration: "none", color: "#0095D2" }}>
                Forgot your password?
              </a>
            </FormGroup>
            <Button
              type="submit"
              value="submit"
              color="primary"
              className="col-12"
              style={{ backgroundColor: "#505CEA" }}
            >
              Login
            </Button>
            <span style={{ color: "#afb0b3" }}>Need an account? </span>
            <a href="#" style={{ textDecoration: "none", color: "#0095D2" }}>
              Register?
            </a>
          </Form>
        </ModalBody>
      </>
    );
  }
}

export default FormLogin;
