import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authThunk';
import { authSelector } from '../../redux/auth/authSlice';
import Loader from '../../components/Loader';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error, userInfo } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [query] = useSearchParams();
  const redirect = query.get('redirect') === null ? '/' : query.get('redirect');

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  useEffect(() => {
    if (userInfo) {
      navigation(redirect);
    }
  }, [userInfo, navigation, redirect]);

  return (
    <FormContainer title='Sign In'>
      {error ? error : null}
      {loading ? <Loader /> : null}
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
          <Link
            to={
              redirect !== '/' ? `/register?redirect=${redirect}` : '/register'
            }
          >
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
