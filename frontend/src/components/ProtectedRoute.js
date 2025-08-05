import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../store/slices/authSlice';
import styled from 'styled-components';
import { Container, Card, Heading, Text, Button } from '../styles/AppStyles';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.gray[300]};
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && !isAuthenticated) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, token, isAuthenticated]);

  useEffect(() => {
    if (!loading && !isAuthenticated && !token) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, token, navigate]);

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      </Container>
    );
  }

  if (!isAuthenticated) {
    return (
      <Container>
        <Card>
          <Heading size="2xl" align="center">
            Access Denied
          </Heading>
          <Text align="center" color="gray">
            You need to be logged in to access this page.
          </Text>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <Button as="a" href="/login">
              Go to Login
            </Button>
          </div>
        </Card>
      </Container>
    );
  }

  return children;
};

export default ProtectedRoute; 