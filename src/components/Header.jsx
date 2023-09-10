import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand>
          Sila Insights
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
