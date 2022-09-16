import React, { useState } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 2rem;
`;

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  & input {
    padding: 10px;
    margin-right: 10px;
  }

  & button {
    padding: 10px;
    background-color: white;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;

function Home() {
  const [search, setSearch] = useState('');

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Title>Main Page</Title>
      <SearchForm onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="검색하기"
          value={search}
          onChange={onChange}
        />
        <button type="submit">검색</button>
      </SearchForm>
    </>
  );
}

export default Home;
