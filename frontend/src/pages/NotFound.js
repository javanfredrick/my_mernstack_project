import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Card, Button, Heading, Text, Flex } from '../styles/AppStyles';

const NotFoundContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const NotFoundCard = styled(Card)`
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const ErrorCode = styled.div`
  font-size: 8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 6rem;
  }
`;

const NotFound = () => {
  return (
    <NotFoundContainer>
      <Container>
        <NotFoundCard>
          <ErrorCode>404</ErrorCode>
          <Heading size="2xl" style={{ marginBottom: '1rem' }}>
            Page Not Found
          </Heading>
          <Text color="gray" style={{ marginBottom: '2rem' }}>
            The page you're looking for doesn't exist or has been moved to a different location.
          </Text>
          <Flex justify="center" style={{ gap: '1rem' }}>
            <Button as={Link} to="/">
              Go Home
            </Button>
            <Button as={Link} to="/dashboard" variant="outline">
              Dashboard
            </Button>
          </Flex>
        </NotFoundCard>
      </Container>
    </NotFoundContainer>
  );
};

export default NotFound; 