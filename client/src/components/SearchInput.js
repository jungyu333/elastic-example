import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import axios from 'axios';

const Input = styled(TextField)`
  width: 100%;
  & label {
    color: lightgray;
  }

  & div {
    border-radius: 15px;
  }
`;

const SearchForm = styled.form`
  width: 60%;
`;

function Search() {
  const [content, setContent] = useState('');
  const [searchData, setSearchData] = useState({
    data: [],
    isLoading: false,
  });
  const navigation = useNavigate();
  const onChange = e => {
    setContent(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/search', { search: content })
      .then(res => {
        setSearchData({
          data: [...res.data.hits],
          isLoading: true,
        });
      })
      .catch(err => console.error(err));
  };
  useEffect(() => {
    if (searchData.isLoading) {
      navigation('/search', { state: { data: searchData.data } });
    }
  }, [searchData, navigation]);

  return (
    <SearchForm onSubmit={onSubmit} autoComplete="off">
      <Input id="outlined-basic" label="영화 검색하기" onChange={onChange} />
    </SearchForm>
  );
}

export default Search;
