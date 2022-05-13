import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NonnaLink from "../components/NonnaLink";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <NonnaLink to='/'>La Nonna </NonnaLink>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const footers = [
  {
    title: 'Nosotros',
    items: [
      {
        description: 'Sobre La Nonna',
        link: '/sobre-nosotros',
      }
    ]
  },
  {
    title: 'Curiosidades',
    items: [
      {
        description: 'Recetas para retoños',
      },
      {
        description: 'Recetas para uno',
      },
      {
        description: 'Bueno bonito y barato',
      },
      {
        description: 'Almorzando con Mirtha',
      }
    ]
  },
  {
    title: 'Legal',
    items: [
      {
        description: 'Aviso legal'
      },
      {
        description: 'Aviso de privacidad'
      },
      {
        description: 'Terminos y condiciones'
      },
      {
        description: 'Cookies (NOT FOOD)'
      }
    ]
  },
  {
    title: 'Redes',
    items: [
      { description: <TwitterIcon></TwitterIcon> },
      { description: <FacebookIcon></FacebookIcon> },
      { description: <InstagramIcon></InstagramIcon> }
    ]
  },
];

export default function StickyFooter() {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <CssBaseline />
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              {footer.title}
            </Typography>
            <ul className={classes.list}>
              {footer.items.map((item) => (
                <li key={item}>
                  {(item.link != undefined) ?
                    <NonnaLink to={item.link}> {item.description} </NonnaLink>
                    :
                    <Link href="#" variant="subtitle1" color="text.secondary" underline='none'>
                      {item.description}
                    </Link>
                  }
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  list: {
    margin: "0",
    padding: "0",
    listStyle: "none"
  }
}));