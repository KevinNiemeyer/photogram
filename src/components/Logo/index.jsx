/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33%;
`;

const Img = styled.img`
  width: 30px;
  padding-right: 15px;
`;

const H2 = styled.h2`
  position: relative;
  font-family: 'Dancing Script', cursive;
  color: var(--secondary-color);
  font-size: 50px;
  padding-left: 17px;
  &::before {
    position: absolute;
    content: '';
    background-color: black;
    width: 1px;
    height: 1em;

    left: 0;
  }
`;

class Logo extends React.Component {
  render() {
    return (
      <Container>
        <Link style={{ textDecoration: 'none' }} to='/'>
          <Img src={logo} />
        </Link>

        <Link style={{ textDecoration: 'none' }} to='/'>
          <H2>Photogram</H2>
        </Link>
      </Container>
    );
  }
}

export default Logo;
