import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import FormContainer from '../../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/auth/authThunk';
import { authSelector } from '../../redux/auth/authSlice';
import Loader from '../../components/Loader';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const { loading, error, userInfo } = useSelector(authSelector);
  const dispatch = useDispatch();

  const [query] = useSearchParams();
  const redirect = query.get('redirect') === null ? '/' : query.get('redirect');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Password not match');
    } else {
      setMessage(null);
      dispatch(registerUser({ name, email, password }));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, dispatch, navigate, redirect]);

  return (
    <FormContainer title='Register'>
      {error ? error : null}
      {message ? message : null}
      {loading ? <Loader /> : null}
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-2'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
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
            onChange={(e) => {
              setPassword(e.target.value);
              if (e.target.value !== confirmPassword) {
                setMessage('Password not match');
              } else {
                setMessage(null);
              }
            }}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter confirm password'
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (e.target.value !== password) {
                setMessage('Password not match');
              } else {
                setMessage(null);
              }
            }}
          ></Form.Control>
        </Form.Group>
        <div className='d-grid'>
          <Button type='submit' className='btn btn-primary mt-3'>
            Register
          </Button>
        </div>
      </Form>
      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link
            to={redirect !== '/' ? `/login?redirect=${redirect}` : '/login'}
          >
            Sign In
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Register;
