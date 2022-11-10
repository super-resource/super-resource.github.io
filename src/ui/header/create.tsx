import { HeaderPresenter } from './presenter/header.presenter';
import * as mobxReact from "mobx-react";
import { Header } from './header';
import { Menu } from './menu';
import { DrawerBox } from './drawer';
import { Login } from './login';
import { Logo } from './logo';

export function create({
  isMobile,
}: {
  isMobile?: boolean
}) {
  const presenter = new HeaderPresenter();
  const onClose = () => {
    presenter.updateOpen(false);
  }
  const onOpen = () => {
    presenter.updateOpen(true);
  }
  const Drawer = mobxReact.observer(() => {
    return <DrawerBox open={presenter.open} OnClose={onClose} Menu={() => <Menu direction='column' />} />
  })


  return {
    Header: mobxReact.observer(() => {
      return <Header Logo={Logo} Login={Login} Menu={() => !isMobile ? <Menu direction='row' /> : null} Drawer={Drawer} onOpen={onOpen} />
    })
  }
}