import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from "@mui/material";

export default function NonnaAboutUs() {
    const theme = useTheme();
    const classes = useStyles();
    return (
        <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
      }}
    >

      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Quienes somos?
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Sobre La Nonna
            </Typography>
          </Box>
        </Grid>
      </Grid>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nosotros
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Brindamos un espacio para que puedas compartir las recetas de tu Nonna. 
            También podrás aprender las recetas de las Nonnas de otros usuarios y calificarlas!
            </Typography>
          </Container>
        </Box>
    </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    container:{
        backgroundColor: "rgba(0, 0, 0, 0)"
    }
}));
