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
  width: 70px;
  height: 70px;
  margin-right: 10px;

  & div {
    width: 70px;
    height: 70px;
  }
`;

const CustomDivider = styled(Divider)`
  width: 100%;
  margin-left: 1rem;
`;

const GridContainer = styled(Grid)`
  margin: 1rem 0;
`;

function SearchList() {
  return (
    <GridContainer container>
      <Grid item xl={12} sm={6}>
        <CustomList>
          <ListItem alignItems="flex-start">
            <CustomAvatarItem>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </CustomAvatarItem>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <CustomDivider variant="inset" component="div" />
        </CustomList>
      </Grid>
      <Grid item xl={12} sm={6}>
        <CustomList>
          <ListItem alignItems="flex-start">
            <CustomAvatarItem>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </CustomAvatarItem>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <CustomDivider variant="inset" component="div" />
        </CustomList>
      </Grid>
    </GridContainer>
  );
}

export default SearchList;
