import { Divider, Grid, ImageListItem } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Actor from '../components/Actor';

const MovieImage = styled.div`
  width: 100%;
  height: 500px;
  background-color: lightgray;
  margin-top: 3rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  & h1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  & span {
    font-size: 0.8rem;
    color: gray;
  }
`;

const CustomDivider = styled(Divider)`
  margin-bottom: 1rem;
  border-color: lightgray;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MiddleItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
  & h1 {
    font-weight: 600;
    min-width: 2rem;
    margin-right: 10px;
    color: #989594;
  }
  & div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 0.8rem;
    color: #b2b1b1;
  }
`;

const KeyWordContainer = styled.div`
  display: flex;
  flex-direction: column;
  & h1 {
    font-weight: 700;
    font-size: 1.5rem;
    margin: 10px 0;
  }
`;

const KeyWordTagContainer = styled.div`
  display: flex;
  & div {
    font-size: 0.8rem;
    color: gray;
    margin: 0 5px;
    border: 1px solid gray;
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background-color: lightgray;
    }
  }
`;

const CustomGridContainer = styled(Grid)`
  margin: 2rem 0;
`;

const CustomGridItem = styled(Grid)`
  height: 40vh;
  width: 40vw;
  padding: 1rem;
  border: 0.5px solid lightgray;
  & h1 {
    font-weight: 600;
    font-size: 1.1rem;
    color: gray;
  }
`;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState({
    movieData: [],
    isLoading: false,
  });
  useEffect(() => {
    axios
      .get(`/api/search?movieId=${id}`)
      .then(res =>
        setMovie({
          movieData: [...res.data.hits],
          isLoading: true,
        }),
      )
      .catch(err => console.error(err));
  }, [id]);

  return (
    <Container>
      <ImageListItem>
        <MovieImage />
      </ImageListItem>
      <Header>
        <h1>{movie.movieData[0]?._source.h_movie}</h1>
        <span>{movie.movieData[0]?._source.genre}</span>
      </Header>
      <CustomDivider component="div" />
      <MiddleContainer>
        <MiddleItem>
          <h1>감독</h1>
          <div>{movie.movieData[0]?._source.movie_director}</div>
        </MiddleItem>

        <MiddleItem>
          <h1>출연</h1>
          <Actor actor={movie.movieData[0]?._source.movie_actor} />
        </MiddleItem>
      </MiddleContainer>
      <KeyWordContainer>
        <h1>키워드</h1>
        <KeyWordTagContainer>
          <div>키워드 1</div>
          <div>키워드 2</div>
          <div>키워드 3</div>
        </KeyWordTagContainer>
      </KeyWordContainer>

      <CustomGridContainer justifyContent="center" gap={2} rowGap={2} container>
        <CustomGridItem item xl={5} xs={12}>
          <div>
            <h1>긍정 리뷰</h1>
          </div>
        </CustomGridItem>
        <CustomGridItem item xl={5} xs={12}>
          <div>
            <h1>부정 리뷰</h1>
          </div>
        </CustomGridItem>
      </CustomGridContainer>
    </Container>
  );
}

export default Movie;
