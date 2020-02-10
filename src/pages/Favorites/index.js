//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled, { css } from 'styled-components';
import UserLink from '../../components/UserLink';
import { LayoutContext } from '../../App';
import SelectView from '../../components/SelectView';
import GoToTop from '../../components/GoToTop';

const Container = styled.div`
  margin: 0 auto;
  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
  background-color: rgb(250, 250, 250);
`;

const Results = styled.div`
  width: 100%;
  ${props =>
    props.isGrid &&
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    `}
  ${props =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  align-items: center;
  cursor: pointer;

  ${props =>
    props.landscape
      ? css`
          width: 80vw;
        `
      : css`
          height: 80vh;
        `}
    ${props =>
      props.isGrid &&
      css`
        display: flex;
        width: 250px;
        height: 100%;
        padding-left: 15px;
        padding-right: 15px;
      `}
  ${props =>
    props.isList &&
    css`
      flex-direction: row-reverse;
      justify-content: flex-end;
      width: 100%;
      height: 64px;
      padding-left: 30px;
    `}
  ${props =>
    props.isColumn &&
    css`
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 50%;
    `}
`;

const Loader = styled.div``;

class Favorites extends Component {
  state = { photos: [] };
  componentDidMount() {
    const photos = localStorage.getItem('photos');
    this.setState({ photos: JSON.parse(photos) });
    //if (favorites) this.setState(JSON.parse(favorites));
  }

  //setPage(page + 1);
  /*
  unsplash.photos
  .listPhotos(page, 25, 'latest')
  .then(toJson)
  .then(json => {
    setPhotos([...photos, ...json]);
    setPage(page + 1);
  });
  */

  render() {
    const { photos } = this.state;
    if (!photos) {
      return <Heading id='favorites-heading'>No photos to display.</Heading>;
    }
    return (
      <LayoutContext.Consumer>
        {value => {
          return (
            <Container id='favorites-container'>
              <GoToTop />
              <Heading id='favorites-heading'>
                Favorites:
                <SelectView value={value}></SelectView>
              </Heading>
              <Results
                isGrid={value.isGrid}
                isColumn={value.isColumn}
                isList={value.isList}
                id='landing-results'>
                {photos.map(photo => {
                  const { height, width } = photo;
                  return (
                    <PhotoContainer
                      key={photo.id}
                      isGrid={value.isGrid}
                      isColumn={value.isColumn}
                      isList={value.isList}
                      landscape={width > height}
                      id='result-container'>
                      <UserLink
                        isGrid={value.isGrid}
                        isColumn={value.isColumn}
                        isList={value.isList}
                        key={photo.user.id}
                        id='userlink'
                        photo={photo}
                      />
                      <Photo
                        landscape={width > height}
                        isGrid={value.isGrid}
                        isColumn={value.isColumn}
                        isList={value.isList}
                        id='photo'
                        key={photo.id}
                        photo={photo}
                      />
                    </PhotoContainer>
                  );
                })}
              </Results>
            </Container>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
}
export default Favorites;