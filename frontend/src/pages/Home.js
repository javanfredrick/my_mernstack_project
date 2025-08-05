import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Button, Card, Grid, Flex, Heading, Text } from '../styles/AppStyles';

const HeroSection = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.dark} 100%);
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`;

const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.light};
`;

const FeatureCard = styled(Card)`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
`;

const Home = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Modern Technology Stack',
      description: 'Built with the latest MERN stack technologies including React 18, Node.js, Express, and MongoDB.'
    },
    {
      icon: '🔐',
      title: 'Secure Authentication',
      description: 'JWT-based authentication system with password hashing and secure session management.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Fully responsive design that works perfectly on desktop, tablet, and mobile devices.'
    },
    {
      icon: '⚡',
      title: 'Real-time Features',
      description: 'Socket.io integration for real-time communication and live updates.'
    },
    {
      icon: '🧪',
      title: 'Comprehensive Testing',
      description: 'Complete test suite with unit tests, integration tests, and end-to-end testing.'
    },
    {
      icon: '🌐',
      title: 'Production Ready',
      description: 'Deployment-ready with environment configuration and production optimizations.'
    }
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>MERN Stack Capstone Project</HeroTitle>
          <HeroSubtitle>
            A comprehensive full-stack application showcasing modern web development skills with MongoDB, Express.js, React.js, and Node.js.
          </HeroSubtitle>
          <HeroButtons>
            <Button as={Link} to="/register" variant="outline" style={{ color: 'white', borderColor: 'white' }}>
              Get Started
            </Button>
            <Button as={Link} to="/login" style={{ backgroundColor: 'white', color: '#007bff' }}>
              Sign In
            </Button>
          </HeroButtons>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <Heading size="3xl" align="center" style={{ marginBottom: '3rem' }}>
            Key Features
          </Heading>
          <Grid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <div>
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                  <Heading size="lg" style={{ marginBottom: '1rem' }}>
                    {feature.title}
                  </Heading>
                  <Text color="gray">
                    {feature.description}
                  </Text>
                </div>
              </FeatureCard>
            ))}
          </Grid>
        </Container>
      </FeaturesSection>

      <section style={{ padding: '4rem 0' }}>
        <Container>
          <Card>
            <Flex justify="center" align="center" style={{ textAlign: 'center' }}>
              <div>
                <Heading size="2xl" style={{ marginBottom: '1rem' }}>
                  Ready to Get Started?
                </Heading>
                <Text color="gray" style={{ marginBottom: '2rem' }}>
                  Join thousands of developers building amazing applications with the MERN stack.
                </Text>
                <Button as={Link} to="/register" size="lg">
                  Create Your Account
                </Button>
              </div>
            </Flex>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Home; 