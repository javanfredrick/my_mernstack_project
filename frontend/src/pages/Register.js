import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { register as registerUser, clearError } from '../store/slices/authSlice';
import styled from 'styled-components';
import { Container, Card, Button, Input, FormGroup, Label, Heading, Text, Flex } from '../styles/AppStyles';

const RegisterContainer = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const RegisterCard = styled(Card)`
  max-width: 500px;
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

const NameRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch('password');

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
    dispatch(registerUser(data));
  };

  return (
    <RegisterContainer>
      <Container>
        <RegisterCard>
          <Heading size="2xl" align="center" style={{ marginBottom: '2rem' }}>
            Create Account
          </Heading>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
            <NameRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  {...register('firstName', {
                    required: 'First name is required',
                    minLength: {
                      value: 2,
                      message: 'First name must be at least 2 characters',
                    },
                  })}
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  {...register('lastName', {
                    required: 'Last name is required',
                    minLength: {
                      value: 2,
                      message: 'Last name must be at least 2 characters',
                    },
                  })}
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
              </FormGroup>
            </NameRow>

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
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                      message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number',
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
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div style={{ position: 'relative' }}>
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm your password"
                  {...register('confirmPassword', {
                    required: 'Please confirm your password',
                    validate: (value) =>
                      value === password || 'Passwords do not match',
                  })}
                  className={errors.confirmPassword ? 'error' : ''}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                  {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Button
                type="submit"
                disabled={loading}
                style={{ width: '100%', marginBottom: '1rem' }}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </FormGroup>

            <Flex justify="center">
              <Text size="sm" color="gray">
                Already have an account?{' '}
                <Link to="/login" style={{ color: '#007bff', textDecoration: 'none' }}>
                  Sign in
                </Link>
              </Text>
            </Flex>
          </Form>
        </RegisterCard>
      </Container>
    </RegisterContainer>
  );
};

export default Register; 