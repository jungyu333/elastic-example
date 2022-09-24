import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const SortContainer = styled.div`
  display: flex;
`;

const Sort = styled.div`
  margin: 0 10px;
  cursor: pointer;
  font-size: 1rem;
  color: lightgray;
  &:hover {
    color: rgba(0, 0, 0, 250);
  }
`;

function Search() {
  const location = useLocation();
  const data = location.state.data;

  console.log(data);
  return (
    <Wrapper>
      <h1>Title</h1>
      <SortContainer>
        <Sort>인기순</Sort>
        <Sort>평점순</Sort>
      </SortContainer>
    </Wrapper>
  );
}

export default Search;
