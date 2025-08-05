import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { login, clearError } from '../store/slices/authSlice';
import styled from 'styled-components';
import { Container, Card, Button, Input, FormGroup, Label, Heading, Text, Flex } from '../styles/AppStyles';

const LoginContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const LoginCard = styled(Card)`
  max-width: 400px;
  width: 100%;
`;

const Form = styled.form`
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  return (
    <LoginContainer>
      <Container>
        <LoginCard>
          <Heading size="2xl" align="center" style={{ marginBottom: '2rem' }}>
            Welcome Back
          </Heading>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  className={errors.password ? 'error' : ''}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: '#666',
                  }}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Button
                type="submit"
                disabled={loading}
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
            </FormGroup>

            <Flex justify="center" style={{ marginBottom: '1rem' }}>
              <Text size="sm" color="gray">
                Don't have an account?{' '}
                <Link to="/register" style={{ color: '#007bff', textDecoration: 'none' }}>
                  Sign up
                </Link>
              </Text>
            </Flex>

            <Flex justify="center">
              <Link to="/forgot-password" style={{ color: '#007bff', textDecoration: 'none', fontSize: '0.875rem' }}>
                Forgot your password?
              </Link>
            </Flex>
          </Form>
        </LoginCard>
      </Container>
    </LoginContainer>
  );
};

export default Login; 