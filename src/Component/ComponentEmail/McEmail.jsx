import React from "react";
import { Row, Col, Container,Button,Form } from "react-bootstrap";
 
  

import "./McEmail.css"

function McEmail() {
  return (
    <>
    <div>
     

      <div>
        <h1>McDonald’s Email Signup</h1>
        <h2>Sign Up</h2>
        <p id="para">
          Be in the know about deals, MyMcDonald's Rewards, news and more by
          signing up for emails.
        </p>
        
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>*Indicates a required field</Form.Label>
            <Form.Control type="email" placeholder="*Email" className="input"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="numbers" placeholder="* Zip Code"   className="input"/>
          </Form.Group>

          <p className="para-o-para">
            *By selecting "Sign Up," you agree to the McDonald's{" "}
            <a href="https://www.mcdonalds.com/us/en-us/privacy.html">
              {" "}
              Privacy Policy
            </a>
            and{" "}
            <a href="https://www.mcdonalds.com/us/en-us/terms-and-conditions.html">
              Terms & Conditions.
            </a>{" "}
            <a href="https://www.mcdonalds.com/us/en-us/subscription.html">
              Unsubscribe from<br/>emails
            </a>{" "}
            any time. Please note when unsubscribing: it may take up to 10
            business days for your request to take effect.
          </p>

          <Button variant="warning" type="sign up" className="Button">
            Sign Up
          </Button>
        </Form>
        
      </div>
    </div>

<div>

<Container>
  <Row>
    <Col sm={8}>
      <img src="./Burger2.jpeg" alt="" className="Fries_Bur" />
    </Col>
    <Col sm={4}>
      <h2 className="Fries_print">Free Fries Now. Free McDonald’s Later.*</h2>
      <p>
        Get Free Large Fries with a $1 minimum purchase
        <br />
        when you download the McDonald’s app & join
        <br />
        MyMcDonald’s Rewards. Then, unlock free McDonald’s
        <br />
        faves only in the app with 1500 points after your first
        <br />
        purchase as a MyMcDonald’s Rewards member.
      </p>
      <p className="Fries_sml">
        *Offer valid 1x thru the last day of the month for first time
        app users at participating
        <br />
        McDonald's. May take up to 48 hours to appear in your deals.
        Excludes delivery. Excludes
        <br />
        tax. Free MyMcDonald’s Rewards points valid 1x thru 12/31/23 for
        first time MyMcDonald’s
        <br />
        Rewards users. Program available only at participating
        McDonald’s. McD app download
        <br />
        and registration required.
      </p>
      <Button variant="warning" className="Fries_buton">
        Get Yours
      </Button>
    </Col>
  </Row>
</Container>
</div> 

</>
  );
}

export default McEmail;
