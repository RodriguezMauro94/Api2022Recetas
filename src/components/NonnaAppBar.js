import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, useMediaQuery } from '@material-ui/core';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import NonnaLink from './NonnaLink';

export default function NonnaAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(true);
  const userLogged = window.sessionStorage.getItem("userLogged");

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <NonnaLink to='/'>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <img width="36px" height="36px" src={process.env.PUBLIC_URL + '/logo192.png'} alt="Nonna" />
              <Typography variant="h6" >
                La Nonna
              </Typography>
            </IconButton>
          </NonnaLink>
          <div className={classes.title}></div>

          {isMobile ? (
            <>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                <MenuIcon></MenuIcon>
              </IconButton>
              <Drawer
                anchor='right'
                onClose={() => setOpenDrawer(false)}
                open={openDrawer}>
                <List>
                  {items.map((row) => (
                    <ListItem>
                      <NonnaLink to={row.to}>
                        {getButton(row, classes, userLogged)}
                      </NonnaLink>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {items.map((row) => (
                <NonnaLink to={row.to}>
                  {getButton(row, classes, userLogged)}
                </NonnaLink>
              ))}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    color: "#000",
    backgroundColor: "#FFF"
  },
  menuButtonSecondary: {
    marginLeft: "5px",
    marginRight: "5px",
    color: "#FF8A00",
    borderRadius: "20px",
    border: "1px solid #FF8A00",
    boxSizing: "border-box"
  }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: orange[500],
  '&:hover': {
    backgroundColor: orange[700],
  },
  borderRadius: 20,
  marginLeft: "5px",
  marginRight: "5px"
}));

function getButton(row, classes, userLogged) {
  if( (row.permission=='notLogged' && userLogged) || (row.permission=='logged' && !userLogged)) {
    return <></>
  }
  
  if (row.type === 'primary') {
    return (
      <PrimaryButton>{row.description}</PrimaryButton>
    )
  } else {
    return (
      <Button color="inherit" className={classes.menuButton}>{row.description}</Button>
    )
  }
}

function createData(description, to, permission, type) {
  return {
    description,
    to,
    permission,
    type
  };
}

const items = [
  createData(
    'Recetas',
    '/buscar',
  ),
  createData(
    'Subir receta',
    '/nueva-receta',
  ),
  createData(
    'Ingresar',
    '/login',
    'notLogged'
  ),
  createData(
    'Mi Perfil',
    '/mi-perfil',
    'logged'
  ),
  createData(
    'Registrate',
    '/registro',
    'notLogged',
    'primary'
  )
]
