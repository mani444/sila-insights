import React from 'react';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import appRoutes from "./routes/index";

const App = () => {
  return (
    <>
      <Header />
      <main className='app-main py-3'>
        <Container>
          <Routes>
            {appRoutes}
          </Routes>
        </Container>
      </main>
    </>
  );
};

export default App;
