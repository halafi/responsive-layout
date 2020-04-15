import React from 'react';
import styled from 'styled-components';
import { Flex, Button } from 'rebass/styled-components';
import media from '../../services/media';

const Footer = () => (
  <Flex as="footer" bg="footer" alignItems="center" justifyContent="center" flexGrow={4} mt={3}>
    <Button variant="primary">Click here!</Button>
  </Flex>
);

export default Footer;
