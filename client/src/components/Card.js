import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  border: solid 0.5px lightgray;
`;

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ItemRow = styled.div`
  display: flex;
  margin: 10px 0;
  width: 100%;
  justify-content: space-between;
`;

function Card({ item, id }) {
  return (
    <Wrapper>
      <Link to={`/${id}`}>
        <Container>
          <ItemRow>
            <p>이름</p>
            <p>{item.customer_full_name}</p>
          </ItemRow>
          <ItemRow>
            <p>성별</p>
            <p>{item.customer_gender}</p>
          </ItemRow>
          <ItemRow>
            <p>고객 ID</p>
            <p>{id}</p>
          </ItemRow>
        </Container>
      </Link>
    </Wrapper>
  );
}

export default Card;
