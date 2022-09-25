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
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomList = styled(List)`
  margin: 0.5rem auto;
  width: 100%;
  &:hover {
    background-color: #c6c2c1;
  }
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

const CustomListItem = styled(ListItem)`
  padding: 10px 0;
`;

function SearchItem({ source }) {
  console.log(source);
  return (
    <Grid item xl={12} sm={6}>
      <CustomList>
        <Link to={'/'}>
          <CustomListItem alignItems="flex-start">
            <CustomAvatarItem>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src={source.movie_img}
              />
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
          </CustomListItem>
        </Link>

        <Divider variant="fullWidth" textAlign="start" component="div" />
      </CustomList>
    </Grid>
  );
}

export default SearchItem;
