import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export function Menu({
  direction = 'row'
}: {
  direction: 'row' | 'column'
}) {

  const isrow = direction === 'row'
  return (
    <Box sx={{ flexGrow: 1, flexDirection: direction, display: 'flex', width: 200 }}>
      <Link to='/' style={{
        textAlign: 'center',
        color: 'none'
      }}>
        <Button color={ isrow ? 'inherit' : 'primary' }>Home</Button>
      </Link>
    </Box>
  );
}