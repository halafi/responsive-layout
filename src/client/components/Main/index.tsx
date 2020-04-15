import React from 'react';
import { Box } from 'rebass/styled-components';

const Main = () => (
  <Box
    as="section"
    bg="main"
    flexGrow={4}
    order={[1, null, null, null, 2]}
    mb={[3, null, null, null, 0]}
  />
);

export default Main;
