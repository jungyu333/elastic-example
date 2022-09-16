import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5rem auto;
  width: 100%;
`;

function NoResult() {
  return <Wrapper>검색결과가 없습니다</Wrapper>;
}

export default NoResult;
