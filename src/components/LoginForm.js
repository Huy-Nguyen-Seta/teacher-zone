import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Alert,
  Typography
} from '@mui/material';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await fakeLogin(username, password); 

      if (response.success) {
        onLogin(response.user);
        navigate('/home');  
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError('Login failed. Please try again later.');
      console.error('Login error:', err);
    }
  };


  const fakeLogin = async (username, password) => {
    if (username === 'user' && password === 'password') {
      return { success: true, user: { id: 1, username: 'user' } };
    } else {
      return { success: false, message: 'Invalid credentials.' };
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 400,
        margin: '0 auto',
        padding: 3,
        border: '1px solid #ccc',
        borderRadius: 1,
        gap: 2,
      }}
    >
      <Typography variant="h5" align="center" mb={2}>Login</Typography>
      {error && (
        <Alert severity="error">{error}</Alert>
      )}
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;