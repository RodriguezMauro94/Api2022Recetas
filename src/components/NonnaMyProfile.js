import React, { useRef, useState, useEffect } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Grid, Paper } from '@mui/material';
import { Box } from "@mui/system";
import NonnaRecipesSlider from './NonnaRecipesSlider'
import { getUserProfile, updateUser } from '../api/userController';
import { myRecipes } from '../api/recipeController';

export default function NonnaMyProfile() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const token = window.sessionStorage.getItem("token");
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [editable, setEditable] = useState(false);

    useEffect(() => {
        console.log(editable);
        let mounted = true;
        getUserProfile(token)
            .then(users => {
                if (mounted) {
                    setUsers([users.data])
                }
            })
        return () => mounted = false;
    }, []);

    function handleClick(){
        setEditable(true);
    }

    const uploadInputRef = useRef(null);

    function handleSubmit() {
        if(name != "" && password != "") {
            setEditable(false);
            updateUser({
                token: token,
                name: name,
                password: password
            });
        }
    }

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
                                {editable ?
                                    <>
                                        <TextField
                                            label="Nombre y apellido"
                                            variant="filled"
                                            fullWidth
                                            onChange={(event) => setName(event.target.value)}
                                            defaultValue={user.name}
                                            InputProps={{
                                                readOnly: false,
                                            }}
                                            className={classes.review}
                                        />
                                        <TextField
                                            label="Correo electrónico"
                                            variant="filled"
                                            fullWidth
                                            defaultValue={user.email}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            className={classes.review}
                                        />
                                        <TextField
                                            label="Password"
                                            variant="filled"
                                            type="text"
                                            fullWidth
                                            onChange={(event) => setPassword(event.target.value)}
                                            defaultValue=""
                                            InputProps={{
                                                readOnly: false,
                                                defaultValue: ""
                                            }}
                                            className={classes.review}
                                        />
                                        <Button onClick={handleSubmit} color="inherit" variant="contained">
                                            Guardar
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <TextField
                                            label="Nombre y apellido"
                                            variant="filled"
                                            fullWidth
                                            defaultValue={user.name}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            className={classes.review}
                                        />
                                        <TextField
                                            label="Correo electrónico"
                                            variant="filled"
                                            fullWidth
                                            defaultValue={user.email}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            className={classes.review}
                                        />
                                        <TextField
                                            label="Password"
                                            variant="filled"
                                            type="password"
                                            fullWidth
                                            defaultValue={user.password}
                                            InputProps={{
                                                readOnly: true,
                                            }}
                                            className={classes.review}
                                        />
                                        <Button onClick={handleClick} color="inherit" variant="contained">
                                            Editar
                                        </Button>
                                    </>
                                }

                                <Typography variant="h4">Mis recetas</Typography>
                                <NonnaRecipesSlider
                                    data={myRecipes}
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

