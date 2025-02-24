// SkeletonLoader.tsx
import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const SkeletonLoader: React.FC = () => (
  <Box
    data-testid="skeleton-loader"
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="50vh"
  >
    <CircularProgress />
  </Box>
);

export default SkeletonLoader;
