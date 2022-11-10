import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function Menu({
  direction = 'row'
}: {
  direction: 'row' | 'column'
}) {
  return (
    <Box sx={{ flexGrow: 1, flexDirection: direction, display: 'flex', width: 200 }}>
      <Link to='/' style={{
        textAlign: 'center',
      }}>
        <Button color='primary'>Home</Button>
      </Link>
    </Box>
  );
}