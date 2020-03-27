import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div>
      <h2>User List</h2>
        <Table striped bordered condensed hover>
		  <thead>
		    <tr>
		      <th>Number</th>
		      <th>First Name</th>
		      <th>Last Name</th>
		      <th>Username</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>1</td>
		      <td>Tyrion</td>
		      <td>Lannister</td>
		      <td>reader</td>
		    </tr>
		    <tr>
		      <td>2</td>
		      <td>Jon</td>
		      <td>Snow</td>
		      <td>nightwatch</td>
		    </tr>
		    <tr>
		      <td>3</td>
		      <td>Arya</td>
		      <td>Stark</td>
		      <td>wanderer</td>
		    </tr>
		  </tbody>
		</Table>
      </div>
    );
  }
}

export default Home;
