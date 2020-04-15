import * as React from 'react';
import { Flex } from 'rebass/styled-components';
import styled from 'styled-components';
// @ts-ignore
import { hot } from 'react-hot-loader';
import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import Main from '../components/Main';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import media from '../services/media/index';

const Styled = {
  Container: styled(Flex)`
    min-height: 1400px;
    ${media.tablet} {
      min-height: 100vh;
    }
  `,
};

const Root = () => (
  <Styled.Container flexDirection="column">
    <Navbar />
    <Flex
      as="main"
      flexDirection={['column', null, null, null, 'row']}
      flexGrow={[30, null, null, null, 10]}
    >
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </Flex>
    <Footer />
  </Styled.Container>
);

export default hot(module)(Root);
