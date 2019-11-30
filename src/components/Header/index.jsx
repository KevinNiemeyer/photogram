import React from 'react';
import Logo from '../Logo/index.jsx';
import SearchBar from '../SearchBar';
import Nav from '../Nav';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  flex: 1;
  border-bottom: solid 1px lightgrey;
  background-color: white;
  z-index: 1;
`;

class Header extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        <Logo />
        <SearchBar />
        <Nav />
      </Container>
    );
  }
}

export default Header;
