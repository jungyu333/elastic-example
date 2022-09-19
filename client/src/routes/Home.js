import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import NoResult from '../components/NoResult';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const SearchResult = styled.div`
  margin: 2rem auto;
  width: 80%;
  display: ${({ data }) => (data.length !== 0 ? 'grid' : 'flex')};
  text-align: ${({ data }) => (data.length !== 0 ? 'none' : 'center')};
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  grid-auto-rows: minmax(10rem, auto);
`;

function Home() {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState({
    data: [],
    isSearched: false,
  });

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/search', { search: search })
      .then(res => {
        setSearchData({
          data: [...res.data.hits],
          isSearched: true,
        });
      })
      .catch(err => console.error(err));
  };

  return (
    <Wrapper>
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
      {searchData.isSearched ? (
        <SearchResult data={searchData.data}>
          {searchData.data.length !== 0 ? (
            searchData.data.map(item => (
              <Card key={item._id} item={item._source} id={item._id} />
            ))
          ) : (
            <NoResult />
          )}
        </SearchResult>
      ) : null}
    </Wrapper>
  );
}

export default Home;
