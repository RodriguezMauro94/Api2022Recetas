import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@mui/material';
import recipes from '../mocks/recipes.json'

export default function NonnaAboutUs() {
    const classes = useStyles();

    return (
        <Paper elevation={0} sx={{ p: 2, margin: 1, maxWidth: 'auto', flexGrow: 1, marginTop: 2 }}>
            <div className={classes.root}>
                <Typography variant="h4" >
                    Sobre La Nonna
                </Typography>

                <Typography variant="body1" >
                    Brindamos un espacio para que puedas compartir las recetas de tu Nonna. También podrás aprender las recetas de las Nonnas de otros usuarios y calificarlas!
                </Typography>
            </div>
        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "25px",
        [theme.breakpoints.up('md')]: {
            marginLeft: "100px",
            marginRight: "100px",
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: "20px",
            marginRight: "20px",
        },
    },
}));
