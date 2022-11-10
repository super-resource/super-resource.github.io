import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export function Login() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Button color="inherit">Login</Button>
    </Box>
  );
}