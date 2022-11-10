import { create as createHeader } from 'ui/header/create';
import { createSkeleton } from 'pages/index.page/skeleton/create';

export function installIndexPage({
  isMobile
}:{
  isMobile: boolean
}) {

  const { Header } = createHeader({ isMobile });
  const { Skeleton } = createSkeleton()
  return {
    IndexPage: () => <Skeleton Header={Header} />
  }
}