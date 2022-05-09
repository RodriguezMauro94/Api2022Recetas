import React, { useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Stack } from '@mui/material';
import { Box } from "@mui/system";
import NonnaRecipesSlider from './NonnaRecipesSlider'
import recipes from '../mocks/recipes.json'

export default function NonnaMyProfile() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const user = users[0];

    let [values, setValues] = React.useState({
        name: "",
        email: "",
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
        <>
            <div className={classes.root}>
                <div className={classes.image}>
                    <Stack spacing={1}>
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
                        <Button
                            onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                            color="inherit"
                            variant="contained">
                            Subir Foto
                        </Button>
                    </Stack>
                </div>
                <div>
                    <Typography variant="h4">Mi perfil</Typography>
                    <Stack>
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

                        {values.editable ?
                            <Button onClick={handleClickEditable}>
                                Guardar
                            </Button>
                            :
                            <Button onClick={handleClickEditable}>
                                Editar
                            </Button>
                        }

                        <Typography variant="h4">Mis recetas</Typography>
                        <NonnaRecipesSlider
                            data={getTopRecipes}
                        />
                    </Stack>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        marginTop: 25,
        [theme.breakpoints.up('md')]: {
            paddingLeft: "100px",
            paddingRight: "100px",
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
    },
    formRoot: {
        flexGrow: 1,
        display: "flex",
        marginTop: 15,
        paddingBottom: "50px",
    },
    image: {
        marginRight: "40px"
    },
    ratings: {
        display: "flex",
        gap: 25
    },
    boldText: {
        fontWeight: 700
    },
    rating: {
        display: "flex",
        gap: 5
    },
    review: {
        borderRadius: "20px",
    },
    subtitle: {
        marginTop: "25px"
    },
    imageBox: {
        [theme.breakpoints.up('md')]: {
            height: 200,
            width: 200,
            maxHeight: { xs: 200, md: 200 },
            maxWidth: { xs: 200, md: 200 }
        },
        [theme.breakpoints.down('md')]: {
            height: 50,
            width: 50,
            maxHeight: { xs: 50, md: 50 },
            maxWidth: { xs: 50, md: 50 }
        },
    },
}));

function createData(name, email) {
    return {
        name,
        email
    };
}

const users = [
    createData(
        'Juan Carlos',
        'juancarlos@gmail.com'
    ),
    createData(
        'Roberto Fernandez',
        'miNombreEsRoberto@hotmail.com'
    )
]

function getTopRecipes() {
    return recipes.filter(
        recipe => recipe.user === "12346890"
    )
}