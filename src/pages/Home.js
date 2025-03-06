import React from 'react';
import { Container, Typography } from '@mui/material';

const Home = ({ user }) => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Welcome, {user ? user.username : 'Guest'}!
      </Typography>
      <Typography variant="body1">
        This is the home page.
      </Typography>
    </Container>
  );
};

export default Home;