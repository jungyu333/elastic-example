import { Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const GridContainer = styled(Grid)`
  margin: 1rem 0;
`;

function SearchList({ searchData }) {
  return (
    <GridContainer container>
      {searchData.map(item => (
        <SearchItem key={item._source.movie_id} source={item._source} />
      ))}
    </GridContainer>
  );
}

export default SearchList;
