import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
    white: '#ffffff',
    black: '#000000',
    gray: {
      100: '#f8f9fa',
      200: '#e9ecef',
      300: '#dee2e6',
      400: '#ced4da',
      500: '#adb5bd',
      600: '#6c757d',
      700: '#495057',
      800: '#343a40',
      900: '#212529',
    },
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    secondary: "'Poppins', sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.dark};
    }
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ul, ol {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  .btn {
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

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &.btn-primary {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.dark};
      }
    }

    &.btn-secondary {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.white};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.gray[700]};
      }
    }

    &.btn-outline {
      background-color: transparent;
      border-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};

      &:hover:not(:disabled) {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .form-group {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  .form-label {
    display: block;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.dark};
  }

  .form-control {
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
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .d-flex {
    display: flex;
  }

  .d-grid {
    display: grid;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .align-items-center {
    align-items: center;
  }

  .w-100 {
    width: 100%;
  }

  .h-100 {
    height: 100%;
  }

  .mt-1 { margin-top: ${({ theme }) => theme.spacing.sm}; }
  .mt-2 { margin-top: ${({ theme }) => theme.spacing.md}; }
  .mt-3 { margin-top: ${({ theme }) => theme.spacing.lg}; }
  .mt-4 { margin-top: ${({ theme }) => theme.spacing.xl}; }

  .mb-1 { margin-bottom: ${({ theme }) => theme.spacing.sm}; }
  .mb-2 { margin-bottom: ${({ theme }) => theme.spacing.md}; }
  .mb-3 { margin-bottom: ${({ theme }) => theme.spacing.lg}; }
  .mb-4 { margin-bottom: ${({ theme }) => theme.spacing.xl}; }

  .p-1 { padding: ${({ theme }) => theme.spacing.sm}; }
  .p-2 { padding: ${({ theme }) => theme.spacing.md}; }
  .p-3 { padding: ${({ theme }) => theme.spacing.lg}; }
  .p-4 { padding: ${({ theme }) => theme.spacing.xl}; }
`; 