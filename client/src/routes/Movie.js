import { Divider, ImageListItem } from '@mui/material';
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
      </ImageListItem>
    </Container>
  );
}

export default Movie;
