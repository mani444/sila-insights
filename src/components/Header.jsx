import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { authSelector, logoutUser } from '../redux/auth/authSlice';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const { userInfo } = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand>
          Sila Insights
        </Navbar.Brand>
        <Nav className='ms-auto'>
          {userInfo ? (
            <NavDropdown title={userInfo.name} id='collasible-nav-dropdown'>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link as={NavLink} to='/login'>
              Login
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
