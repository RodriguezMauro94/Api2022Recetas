import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import NonnaLink from "../components/NonnaLink";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <NonnaLink to='/'>La Nonna </NonnaLink>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const footers = [
  {
    title: 'Utiles',
    description: ['Recetas para la cria', 'Recetas para uno', 'Bueno bonito y barato', 'Almorzando con Mirtha'],
  },
  {
    title: 'Nosotrs',
    description: ['Quienes Somos', 'Mision', 'Vision', 'FAQ'],
  },
  {
    title: 'Redes',
    description: ['Twitter', 'Facebook', 'Instagram'],
  },
  {
    title: 'Legal',
    description: ['Aviso legal', 'Aviso de privacidad','Terminos y condiciones','Cookies pero no las que se comen'],
  },
];

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        /* Esta altura representa el espacio blanco previo al footer, debemos buscar si hay algun estandar de accesibilidad */
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </Box>
    </Box>
  );
}