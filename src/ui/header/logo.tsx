import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to={'/'}>
      <Typography variant="button" style={{
        cursor: 'pointer',
        paddingRight: '16px'
      }}>
        Supoer Resource
      </Typography>
    </Link>
  )
}