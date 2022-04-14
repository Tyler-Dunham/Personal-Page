import React from 'react';
import MyNavbar from './MyNavbar';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact () {

  const getInfo = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const message = event.target.message.value;
    window.open(`mailto:tylerjdunham1@gmail.com?subject=${name} Contact me page&body=${message}`)
  }

  return (
    <div>
      <MyNavbar />

      <div className="contact-form">
        <Form onSubmit={getInfo}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control required name="name" type="text" placeholder="Your name"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control required name="message" as="textarea" placeholder="Your message..."/>
          </Form.Group>
          <Button className="submit-btn" variant="primary" type="submit">
            Send
          </Button>
        </Form>       
      </div>

      <div className="contact-info">
        <u><h3>Contact Info</h3></u>
        <p><strong>Phone Number:</strong> (413) 505-4054</p>
        <p><strong>Email:</strong> tylerjdunham1@gmail.com</p>
        <p><strong>Location:</strong> Springfield, MA</p>
      </div>

    </div>
  );
}

export default Contact;