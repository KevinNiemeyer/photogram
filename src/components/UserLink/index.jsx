import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 10px;
  &:hover img {
    opacity: 0.8;
  }
  &:active img {
    transform: scale(0.9);
  }
`;

const Img = styled.img`
  border-radius: 50%;
`;

const linkStyle = {
  textDecoration: 'none',
  color: 'red',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '5px'
};

const pStyle = {
  paddingLeft: '10px'
};

class UserLink extends Component {
  render() {
    return (
      <LinkContainer id='userlink-container'>
        <Link
          style={linkStyle}
          id='userlink-link'
          to={`/user/${this.props.photo.user.username}`}>
          <Img
            id='userlink-image'
            alt={this.props.photo.description}
            src={this.props.photo.user.profile_image.small}
          />
          <p style={pStyle}>{this.props.photo.user.name}</p>
        </Link>
      </LinkContainer>
    );
  }
}

export default UserLink;
