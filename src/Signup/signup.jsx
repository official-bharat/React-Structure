import React, { Component } from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';
import './signup.css';

class Signup extends Component {
  render() {
    return (
      <div className="main-login">
      	<h2> </h2>
        <Form>

          <FormGroup controlId="formHorizontalName">
		    <Col componentClass={ControlLabel} sm={2}>
		      Name
		    </Col>
		    <Col sm={10}>
		      <FormControl type="text" placeholder="Name" />
		    </Col>
		  </FormGroup>

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

		  <FormGroup controlId="formHorizontalConfirmPassword">
		    <Col componentClass={ControlLabel} md={6}>
		      Confirm Password
		    </Col>
		    <Col sm={10}>
		      <FormControl type="password" placeholder="Confirm Password" />
		    </Col>
		  </FormGroup>

		  <FormGroup>
		    <Col smOffset={2} sm={10}>
		      <Button type="submit">Sign up</Button>
		    </Col>
		  </FormGroup>
		</Form>
      </div>
    );
  }
}

export default Signup;
