import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import styled from 'styled-components';
import { Container, Button, Flex } from '../styles/AppStyles';

const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Flex justify="space-between">
            <Logo to="/">MERN Capstone</Logo>
            
            <NavLinks>
              <NavLink to="/">Home</NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <NavLink to="/profile">Profile</NavLink>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <NavLink to="/login">Login</NavLink>
                  <Button as={Link} to="/register">
                    Register
                  </Button>
                </>
              )}
            </NavLinks>

            <MobileMenu>
              <Button variant="outline">
                Menu
              </Button>
            </MobileMenu>
          </Flex>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header; 