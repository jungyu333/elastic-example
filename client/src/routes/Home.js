import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

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
`;

function Home() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/search', { search: search })
      .then(res => {
        setData([...res.data.hits]);
        console.log(res.data.hits);
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
      <SearchResult>
        {data &&
          data.map(item => (
            <div key={item._id}>{item._source.customer_full_name}</div>
          ))}
      </SearchResult>
    </Wrapper>
  );
}

export default Home;
