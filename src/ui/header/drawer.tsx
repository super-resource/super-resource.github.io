import * as React from 'react';
import Drawer from '@mui/material/Drawer';

export function DrawerBox({
  Menu,
  open,
  OnClose
}: {
  Menu: React.ComponentType,
  open: boolean,
  OnClose: () => void
}) {
  return (
    <Drawer
      anchor={'left'}
      open={open}
      onClose={OnClose}
    >
      {Menu && <Menu />}
    </Drawer>
  );
}

