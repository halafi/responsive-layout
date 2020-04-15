import React from 'react';
import { Flex } from 'rebass/styled-components';
import First from './components/LeftSidebar/First';
import Second from './components/LeftSidebar/Second';

const LeftSidebar = () => (
  <Flex
    as="aside"
    flexDirection={['row', null, null, null, 'column']}
    flexGrow={[2, null, null, null, 1]}
    mr={[null, null, null, null, 3]}
    mb={[3, null, null, null, 0]}
    order={[2, null, null, null, 1]}
  >
    <First />
    <Second />
  </Flex>
);

export default LeftSidebar;
