import React from 'react';
import styled from 'styled-components';
import { Container, Flex } from '../styles/AppStyles';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.gray[300]};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterLinks>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterLinks>
          <FooterText>
            © {currentYear} MERN Stack Capstone Project. All rights reserved.
          </FooterText>
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 