import React from 'react';
import {Form, Button,} from "react-bootstrap"
import "./Order.css"

const Order = () => {
    return (
        <div>



          <h1>
            McDonalds Delicasy
          </h1>
          <p className='pa'>
            Order whatever you wish for. We are here for you.  
          </p>
         <Form className="fom">  {/* onSubmit={this.handleSubmit} */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              // value={this.state.name}
              // onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="phone number"
              name="phone number"
              // value={this.state.email}
              // onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="string"
              placeholder="Location"
              name="location"
              // value={this.state.gen}
              // onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="warning" type="submit">
            Order
          </Button>
        </Form>
      </div>
    );
}

export default Order;
