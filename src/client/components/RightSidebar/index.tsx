import React from 'react';
import { Box } from 'rebass/styled-components';

const RightSidebar = () => (
  <Box
    as="aside"
    bg="rightSidebar"
    flexGrow={[4, null, null, null, 1]}
    order={3}
    ml={[0, null, null, null, 3]}
  />
);

export default RightSidebar;
