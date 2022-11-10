import * as React from 'react';
import Container from '@mui/material/Container';
// 'xs' | 'sm' | 'md' | 'lg' | '
function Skeleton({
  Header,
}: {
  Header: React.ComponentType,
}) {
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth='xl'>
      </Container>
    </React.Fragment>
  )
}

export default Skeleton
