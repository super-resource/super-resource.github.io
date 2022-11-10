import Skeleton from './skeleton';
import { theme } from 'ui/base/theme/theme';
import { ThemeProvider } from "@mui/material/styles";
import * as React from 'react';

export function createSkeleton() {
  return {
    Skeleton: (props: {
      Header: React.ComponentType,
    }) => <ThemeProvider theme={theme}>
        <Skeleton {...props} />
      </ThemeProvider>
  };
}