import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

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
      <div className="row d-flex justify-content-end">
        <div className="col-7">
          <ModalBody>
            <Form onSubmit={this.handleLogin} style={{color:"#C5C5C5"}}>
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
                <a href="#" style={{textDecoration:"none",color:"#0095D2"}}>Forgot your password?</a>
              </FormGroup>
              <Button type="submit" value="submit" color="primary" className='col-12'>
                Login
              </Button>
              <span style={{color:"#afb0b3"}}>Need an account? </span><a href="#" style={{textDecoration:"none",color:"#0095D2"}}>Register?</a>
            </Form>
          </ModalBody>
        </div>
        <div className="col-5">
            <p>Hellooooooooooooo-00000000ooooooo</p>
        </div>
      </div>
    );
  }
}

export default FormLogin;
