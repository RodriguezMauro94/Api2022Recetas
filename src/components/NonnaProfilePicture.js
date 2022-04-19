import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';
import { Stack } from '@mui/material';

export default function NonnaProfilePicture(props) {
  const classes = useStyles();

  return (
    <Container className={classes.landing} sx={{
        backgroundImage: require(`../img/${props.profilePicture}.png`)
    }}>
        <Stack>
            <a url="#" className={classes.editPrifilePicture}>Editar</a> 
        </Stack>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  landing: {
    backgroundColor: "#FF8",
    width: "270px",
    height: "270px",
    borderRadius: 180
  },
  editPrifilePicture: {
    backgroundColor: "#C4C4C4",
    width: "270px",
    height: "270px",
    borderRadius: 180
  }
}));
