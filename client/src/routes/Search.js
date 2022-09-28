import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SearchList from '../components/SearchList';

const Wrapper = styled.div`
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & h1 {
    font-weight: 600;
    font-size: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
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

const FilterContainer = styled.div`
  width: 100%;
  margin: 15px 0;
  display: flex;
  justify-content: flex-start;
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

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchData, setSearchData] = useState({
    data: [],
    isLoading: false,
  });
  useEffect(() => {
    if (query) {
      axios
        .post('/api/search', { search: query })
        .then(res => {
          setSearchData({
            data: [...res.data.hits],
            isLoading: true,
          });
        })
        .catch(err => console.error(err));
    }
  }, [query]);

  return (
    <>
      <Layout isNavSearch={true} />
      <Wrapper>
        <Header>
          <h1>Title</h1>
          <SortContainer>
            <Link to={`/search?query=${query}&sort=${'인기순'}`}>
              <Sort>인기순</Sort>
            </Link>
            <Link to={`/search?query=${query}&sort=${'평점순'}`}>
              <Sort>평점순</Sort>
            </Link>
          </SortContainer>
        </Header>
        <FilterContainer>
          <div>액션</div>
          <div>드라마</div>
          <div>스릴러</div>
        </FilterContainer>
        <SearchList searchData={searchData.data} />
      </Wrapper>
    </>
  );
}

export default Search;
