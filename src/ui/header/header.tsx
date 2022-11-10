import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export function Header({
  Menu,
  Drawer,
  onOpen,
  Login,
  Logo,
}: {
  Menu?: React.ComponentType,
  Drawer: React.ComponentType,
  onOpen: () => void,
  Login: React.ComponentType,
  Logo: React.ComponentType,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Drawer />
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          {Menu && <Menu />}
          <Login />
        </Toolbar>
      </AppBar>
    </Box>
  );
}