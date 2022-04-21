import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';
import { Button, Container, TextField } from '@material-ui/core';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function NonnaLogin() {
    const classes = useStyles();
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    return (
        <div className={classes.root}>
            <Stack>
                <Container>
                    <Typography className={classes.loginTitle} variant="h4">
                        Inicia sesión
                    </Typography>
                </Container>
                <Container>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Correo electrónico"
                        className={classes.searchInput}
                    />
                    <TextField
                        id="outlined-adornment-password"
                        className={classes.searchInput}
                        fullWidth
                        variant="outlined"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        label="Contraseña"
                        onChange={handleChange('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Mostrar/Ocultar"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
                <Container>
                    <Stack className={classes.loginButtons}>
                        <LoginButton>Ingresar</LoginButton>
                        <Link to="/olvido-de-password" color="inherit">Olvidaste la contraseña?</Link>
                        <Link to="/registro" color="inherit">No tenés cuenta? Registrate!</Link>
                    </Stack>
                </Container>
            </Stack>
        </div>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        marginLeft: "100px",
        marginRight: "100px"
    },
    loginTitle: {
        textAlign: "center",
        marginBottom: "50px"
    },
    searchInput: {
        color: "black",
        borderBottomColor: 'white',
        marginBottom: "25px",
    },
    loginButtons: {
        alignItems: "center"
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor: orange[700],
    },
    borderRadius: 20,
    paddingLeft: "15px",
    paddingRight: "15px",
    marginBottom: "15px"
}));