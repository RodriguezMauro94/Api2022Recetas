import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@mui/icons-material/Face';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, useMediaQuery } from '@material-ui/core';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function NonnaAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <FaceIcon />
              <Typography variant="h6" >
                La Nonna
              </Typography>
            </IconButton>
          </Link>
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
                      <Link to={row.to} style={{ textDecoration: 'none' }}>
                        {getButton(row, classes)}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <>
              {items.map((row) => (
                <Link to={row.to} style={{ textDecoration: 'none' }}>
                  {getButton(row, classes)}
                </Link>
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

function getButton(row, classes) {
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

function createData(description, to, type) {
  return {
    description,
    to,
    type
  };
}

const items = [
  createData(
    'Recetas',
    '/buscar'
  ),
  createData(
    'Categorías',
    '/categorias'
  ),
  createData(
    'Ingresar',
    '/login'
  ),
  createData(
    'Mi Perfil',
    '/perfil'
  ),
  createData(
    'Registrate',
    '/registro',
    'primary'
  )
]
