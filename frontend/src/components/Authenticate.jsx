import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from '../redux/auth/authSlice';

const Authenticate = () => {
  const { userInfo } = useSelector(authSelector);

  if (!userInfo) {
    return <Navigate to='/login' />;
  }

  return <Outlet />

};

export default Authenticate;
