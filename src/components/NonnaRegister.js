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

export default function NonnaRegister() {
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

    const handleClickShowReenterPassword = () => {
        setValues({
            ...values,
            showReenterPassword: !values.showReenterPassword,
        });
    };

    const [values, setValues] = React.useState({
        password: '',
        reenterPassword: '',
        showPassword: false,
        showReenterPassword: false,
    });

    return (
        <div className={classes.root}>
            <Stack>
                <Container>
                    <Typography className={classes.title} variant="h4">
                        Registrate
                    </Typography>
                </Container>
                <Container>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Nombre"
                        className={classes.input}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Apellido"
                        className={classes.input}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Correo electrónico"
                        className={classes.input}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Número de teléfono"
                        className={classes.input}
                    />
                    <TextField
                        className={classes.input}
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
                    <TextField
                        className={classes.input}
                        fullWidth
                        variant="outlined"
                        type={values.showReenterPassword ? 'text' : 'password'}
                        value={values.reenterPassword}
                        label="Repetir contraseña"
                        onChange={handleChange('reenterPassword')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Mostrar/Ocultar"
                                        onClick={handleClickShowReenterPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showReenterPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>
                <Container>
                    <Stack className={classes.primaryButton}>
                        <PrimaryButton>Registrarse</PrimaryButton>
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
    title: {
        textAlign: "center",
        marginBottom: "50px"
    },
    input: {
        color: "black",
        borderBottomColor: 'white',
        marginBottom: "25px",
    },
    primaryButton: {
        alignItems: "center"
    }
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
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