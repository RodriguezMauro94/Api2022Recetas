import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import background from "../img/landing.png";
import { Stack } from '@mui/material';
import { Container, TextField } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import NonnaLink from './NonnaLink';

export default function NonnaHeaderLanding() {
  const theme = useTheme();
  const classes = useStyles();

  const [search, setSearch] = React.useState('');
  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={classes.landing}>
      <Stack spacing={2}>
        <Container>
          <Typography className={classes.landingTitle} variant="h3">
            Los secretos de La Nonna
          </Typography>
          <Typography className={classes.landingSubtitle} variant="h5">
            Compartí los secretos de tu nonna
          </Typography>
        </Container>
        <Container>
          <StyledTextField
            fullWidth
            variant="filled"
            label="Encontrá la receta que buscabas..."
            className={classes.searchInput}
            onChange={handleChangeSearch}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <NonnaLink to={`/buscar/${search}`}>
                    <IconButton edge="end" >
                      <SearchIcon />
                    </IconButton>
                  </NonnaLink>
                </InputAdornment>
              ),
            }}
          />
        </Container>
      </Stack>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  landing: {
    backgroundImage: `url(${background})`,
    [theme.breakpoints.down('md')]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: "200px",
      paddingRight: "200px",
    }
  },
  landingTitle: {
    marginTop: "85px",
    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.90);",
    textAlign: "center",
    color: "#FFF",
    borderColor: "#FFF"
  },
  landingSubtitle: {
    textShadow: "0px 4px 10px rgba(0, 0, 0, 0.90);",
    textAlign: "center",
    color: "#FFF",
    borderColor: "#FFF",
    marginBottom: "100px"
  },
  searchInput: {
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "20px",
    borderBottomColor: 'white',
    [theme.breakpoints.down('md')]: {
      marginBottom: "50px"
    },
    [theme.breakpoints.up('md')]: {
      marginBottom: "135px"
    }
  }
}));

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInputBase-input': {
    borderRadius: 20,
    fontSize: 16,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
      borderRadius: "20px"
    },
    '&:hover fieldset': {
      borderColor: 'white',
      borderRadius: "20px"
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
      borderRadius: "20px"
    },
  },
});