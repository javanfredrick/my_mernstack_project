import styled from 'styled-components';

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: ${({ theme }) => theme.fontSizes.base};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.dark};
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.gray[700]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.primary};
            color: ${theme.colors.white};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          &:hover:not(:disabled) {
            background-color: ${theme.colors.dark};
          }
        `;
    }
  }}
`;

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
  }

  &.error {
    border-color: ${({ theme }) => theme.colors.danger};
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  gap: ${({ gap, theme }) => gap || theme.spacing.md};
`;

export const Text = styled.p`
  margin: 0;
  color: ${({ color, theme }) => color || theme.colors.dark};
  font-size: ${({ size, theme }) => theme.fontSizes[size] || theme.fontSizes.base};
  font-weight: ${({ weight }) => weight || 'normal'};
  text-align: ${({ align }) => align || 'left'};
`;

export const Heading = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  color: ${({ color, theme }) => color || theme.colors.dark};
  font-size: ${({ size, theme }) => theme.fontSizes[size] || theme.fontSizes['3xl']};
  font-weight: ${({ weight }) => weight || '600'};
  text-align: ${({ align }) => align || 'left'};
`; 