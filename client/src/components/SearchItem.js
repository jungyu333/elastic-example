import {
  Avatar,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const CustomList = styled(List)`
  margin: 1rem auto;
  width: 100%;
`;

const CustomAvatarItem = styled(ListItemAvatar)`
  width: 80px;
  height: 80px;
  margin-right: 10px;

  & div {
    width: 80px;
    height: 80px;
    & img {
      object-fit: cover;
    }
  }
`;

const CustomDivider = styled(Divider)`
  width: 100%;
  margin-left: 1rem;
`;

function SearchItem({ source }) {
  console.log(source);
  return (
    <Grid item xl={12} sm={6}>
      <CustomList>
        <ListItem alignItems="flex-start">
          <CustomAvatarItem>
            <Avatar variant="square" alt="Remy Sharp" src={source.movie_img} />
          </CustomAvatarItem>
          <ListItemText
            primary={source.h_movie}
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {source.genre}
                </Typography>
                {`- ${source.movie_director}`}
              </>
            }
          />
        </ListItem>
        <CustomDivider variant="inset" component="div" />
      </CustomList>
    </Grid>
  );
}

export default SearchItem;
