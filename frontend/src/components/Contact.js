import React, { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';
import { getAPIBaseURL } from '../utills/common';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';

const Contact = () => {
  const [state, setState] = useState({ email: '', subject: '', message: '', token: '' });
  const { email, subject, message, token } = state;

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(window.Email);
    try {
      const result = await axios.post(getAPIBaseURL() + 'email/contact', { email, subject, message });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);
  return (
    <div className="container p-4 text-center">
      <h1 className="mb-3">Support</h1>
      <Form className="mb-4" onSubmit={onSubmit}>
        <FormGroup className="mb-3" row>
          <Col sm={12} md={5} className="m-auto">
            <Input
              required
              bsSize="lg"
              type="email"
              name="email"
              value={email}
              className="font-1rem"
              placeholder="Your email address"
              onChange={(e) => setState({ ...state, email: e.target.value })}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" row>
          <Col sm={12} md={5} className="m-auto">
            <Input
              required
              type="text"
              bsSize="lg"
              name="subject"
              value={subject}
              className="font-1rem"
              placeholder="Your subject"
              onChange={(e) => setState({ ...state, subject: e.target.value })}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" row>
          <Col sm={12} md={5} className="m-auto">
            <Input
              required
              bsSize="lg"
              name="message"
              type="textarea"
              value={message}
              className="font-1rem"
              placeholder="Your message"
              onChange={(e) => setState({ ...state, message: e.target.value })}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" row>
          <Col sm={12} md={5} className="m-auto">
            <ReCAPTCHA sitekey={process.env.REACT_APP_RECAPCTHA_KEY} onChange={(token) => setState({ ...state, token })} />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col sm={12} md={5} className="m-auto">
            <Button type="submit" className="btn-green w-100 font-bold font-1rem" size="lg" disabled={!token}>
              SEND
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Contact;
