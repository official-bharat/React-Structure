import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className="main-login">
      	<h2> </h2>
        <Form>
		  <FormGroup controlId="formHorizontalEmail">
		    <Col componentClass={ControlLabel} sm={2}>
		      Email
		    </Col>
		    <Col sm={10}>
		      <FormControl type="email" placeholder="Email" />
		    </Col>
		  </FormGroup>

		  <FormGroup controlId="formHorizontalPassword">
		    <Col componentClass={ControlLabel} sm={2}>
		      Password
		    </Col>
		    <Col sm={10}>
		      <FormControl type="password" placeholder="Password" />
		    </Col>
		  </FormGroup>

		  <FormGroup>
		    <Col smOffset={2} sm={10}>
		      <Button type="submit">Login</Button>
		    </Col>
		  </FormGroup>
		</Form>
      </div>
    );
  }
}

export default Login;
