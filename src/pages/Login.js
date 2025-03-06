import React from 'react';
import LoginForm from '../components/LoginForm';
import { Container } from '@mui/material';

const Login = ({ onLogin }) => {
  return (
    <Container maxWidth="sm">
      <LoginForm onLogin={onLogin} />
    </Container>
  );
};

export default Login;