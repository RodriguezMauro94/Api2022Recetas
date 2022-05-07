import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from '@material-ui/core';

export default function NonnaSectionTitle(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className={classes.sectionRow}>
      {isMobile ?
        <></>
        :
        <div className={classes.sectionDivider}></div>
      }
      <Typography variant="h5">
        {props.sectionTitle}
      </Typography>
      <div className={classes.sectionDivider}></div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  sectionRow: {
    display: "flex",
    alignItems: "center",
    marginTop: "24px",
    marginBottom: "24px",
    [theme.breakpoints.up('sm')]: {
      paddingLeft: "100px",
      paddingRight: "100px",
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    gap: "5px"
  },
  sectionDivider: {
    backgroundColor: "#FF8A00",
    width: "25px",
    height: "2px",
    flexGrow: 1,

  }
}));