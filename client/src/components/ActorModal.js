import { Box, Modal, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const CustomModal = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #e5e0df;
  width: 70vw;
  height: 80vh;
  border: 1px solid #000;
  padding: 1rem;
`;

function ActorModal({ onClickCloseModal, openModal, actor }) {
  useEffect(() => {
    if (actor) {
      console.log(actor);
      axios.get(`/search?actor=${encodeURIComponent(actor)}`);
    }
  }, [actor]);

  return (
    <>
      <Modal open={openModal} onClose={onClickCloseModal}>
        <CustomModal>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {actor}
          </Typography>
        </CustomModal>
      </Modal>
    </>
  );
}

export default ActorModal;
