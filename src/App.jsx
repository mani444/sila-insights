import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Login from './modules/Login/Login';

const App = () => {
  return (
    <>
      <Header />
      <main className='app-main py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
