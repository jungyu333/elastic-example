import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  border: 1px solid lightgray;
  padding: 1rem;
`;

const Item = styled.div`
  display: flex;
  margin: 1rem 0;
  justify-content: space-between;
  & h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }

  & div {
    color: gray;
    font-size: 0.8rem;
  }
`;

function Detail() {
  const { id } = useParams();
  const [data, setData] = useState({
    product: {},
    isLoading: false,
  });

  useEffect(() => {
    axios
      .get(`/api/search?id=${id}`)
      .then(res =>
        setData({
          product: res.data.hits[0],
          isLoading: true,
        }),
      )
      .catch(err => console.error(err));
  }, [id]);

  return (
    <Wrapper>
      <Container>
        <Item>
          <h1>유저 ID</h1>
          <div>{data.product?._id}</div>
        </Item>
        <Item>
          <h1>이름</h1>
          <div>{data.product._source?.customer_full_name}</div>
        </Item>
        <Item>
          <h1>성별</h1>
          <div>{data.product._source?.customer_gender}</div>
        </Item>
      </Container>
    </Wrapper>
  );
}

export default Detail;
