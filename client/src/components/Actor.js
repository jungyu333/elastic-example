import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import ActorModal from './ActorModal';

const Actors = styled.div`
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    color: gray;
  }
`;

function Actor({ actor }) {
  const [openModal, setOpenModal] = useState(false);
  const [clickedActor, setClickedActor] = useState('');
  const onClickActor = useCallback(
    e => {
      setOpenModal(true);
      setClickedActor(e.target.innerText);
    },
    [setOpenModal, setClickedActor],
  );
  const onClickCloseModal = useCallback(() => {
    setOpenModal(false);
  }, [setOpenModal]);

  return (
    <div>
      {actor?.map((actor, index) => (
        <Actors onClick={onClickActor} key={index}>
          {actor}
        </Actors>
      ))}
      <ActorModal
        openModal={openModal}
        onClickCloseModal={onClickCloseModal}
        actor={clickedActor}
      />
    </div>
  );
}

export default Actor;
