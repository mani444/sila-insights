import React, { useState } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <FormContainer title='Sign In'>
      {/* {loading ? <Loader /> : null} */}
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-2'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className='d-grid'>
          <Button type='submit' className='btn btn-primary mt-3'>
            Sign In
          </Button>
        </div>
      </Form>
      <Row className='py-3'>
        <Col>
          Not have an account?{' '}
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
