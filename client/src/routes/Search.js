import React from 'react';
import { useLocation } from 'react-router-dom';

function Search() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return <div>search</div>;
}

export default Search;
