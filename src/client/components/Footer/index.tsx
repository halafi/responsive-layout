import React from 'react';
import { Flex, Button } from 'rebass/styled-components';

const Footer = () => (
  <Flex as="footer" bg="footer" alignItems="center" justifyContent="center" flexGrow={4} mt={3}>
    <Button variant="primary">Click here!</Button>
  </Flex>
);

export default Footer;
