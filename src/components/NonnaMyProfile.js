import React, { useRef, useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Grid, Paper } from '@mui/material';
import { Box } from "@mui/system";
import NonnaRecipesSlider from './NonnaRecipesSlider'
import { getUserProfile } from '../api/userController';
import { myRecipes } from '../api/recipeController';

export default function NonnaMyProfile() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const token = window.sessionStorage.getItem("token");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        let mounted = true;
        getUserProfile(token)
            .then(users => {
                if (mounted) {
                    setUsers([users.data])
                }
            })
        return () => mounted = false;
    }, [])

    function callToMyRecipes() {
        return myRecipes(token);
    }

    let [values, setValues] = React.useState({
        name: "",
        email: "",
        password: "",
        editable: false
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickEditable = () => {
        setValues({
            ...values,
            editable: !values.editable,
        });
    };

    const uploadInputRef = useRef(null);

    return (
        <Paper sx={{ p: 2, margin: 1, maxWidth: 'auto', flexGrow: 1, marginTop: 2 }}>
            <>
                {users.map((user) => (
                    <Grid container spacing={1}>
                        <Grid item spacing={0.5}>
                            <Box
                                component="img"
                                className={classes.imageBox}
                                alt="Foto de portada"
                                src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            />
                            <input
                                ref={uploadInputRef}
                                type="file"
                                accept="image/*"
                                style={{ display: "none" }}
                            />
                            {/*onChange={onChange}*/}
                            <Grid item>
                                <Button
                                    onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                                    color="inherit"
                                    variant="contained">
                                    Cambiar Foto
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm container>
                            <Typography variant="h4">Mi perfil</Typography>
                            <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start">
                                <TextField
                                    label="Nombre y apellido"
                                    variant="filled"
                                    fullWidth
                                    onChange={handleChange('name')}
                                    defaultValue={user.name}
                                    InputProps={{
                                        readOnly: values.editable,
                                    }}
                                    className={classes.review}
                                />
                                <TextField
                                    label="Correo electrónico"
                                    variant="filled"
                                    fullWidth
                                    onChange={handleChange('email')}
                                    defaultValue={user.email}
                                    InputProps={{
                                        readOnly: values.editable,
                                    }}
                                    className={classes.review}
                                />
                                <TextField
                                    label="Password"
                                    variant="filled"
                                    type="password"
                                    fullWidth
                                    onChange={handleChange('password')}
                                    defaultValue={user.password}
                                    InputProps={{
                                        readOnly: values.editable,
                                    }}
                                    className={classes.review}
                                />

                                {values.editable ?
                                    <Button onClick={handleClickEditable} color="inherit" variant="contained">
                                        Guardar
                                    </Button>
                                    :
                                    <Button onClick={handleClickEditable} color="inherit" variant="contained">
                                        Editar
                                    </Button>
                                }

                                <Typography variant="h4">Mis recetas</Typography>
                                <NonnaRecipesSlider
                                    data={callToMyRecipes}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                ))}
            </>
        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    review: {
        borderRadius: "20px",
        margin: 4
    },
    imageBox: {
        [theme.breakpoints.up('md')]: {
            height: 200,
            width: 200,
            maxHeight: { xs: 200, md: 200 },
            maxWidth: { xs: 200, md: 200 }
        },
        [theme.breakpoints.down('md')]: {
            height: 150,
            width: 150,
            maxHeight: { xs: 150, md: 150 },
            maxWidth: { xs: 150, md: 150 }
        },
    },
}));

function createData(name, email, password) {
    return {
        name,
        email,
        password
    };
}

const users = [
    createData(
        'Juan Carlos',
        'juancarlos@gmail.com',
        'SuperSecretPassword'
    ),
    createData(
        'Roberto Fernandez',
        'miNombreEsRoberto@hotmail.com',
        'SuperSecretPassword'
    )
]
