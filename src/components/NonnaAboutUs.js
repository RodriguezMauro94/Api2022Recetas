import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@mui/material';
import recipes from '../mocks/recipes.json'

export default function NonnaAboutUs() {
    return (
        <Paper sx={{ p: 2, margin: 1, maxWidth: 'auto', flexGrow: 1, marginTop: 2 }}>
            <>
                <Typography variant="h6" >
                    Sobre La Nonna
                </Typography>

                <Typography variant="body1" >
                    Brindamos un espacio para que puedas compartir las recetas de tu Nonna. También podrás aprender las recetas de las Nonnas de otros usuarios y calificarlas!
                </Typography>
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

function getTopRecipes() {
    return recipes.filter(
        recipe => recipe.user === "12346890"
    )
}