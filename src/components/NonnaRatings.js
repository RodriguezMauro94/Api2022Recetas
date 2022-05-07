import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, useMediaQuery } from '@material-ui/core';
import { Rating, Stack } from '@mui/material';
import vegan from "../img/vegan.png";
import celiac from "../img/celiac.png";

export default function NonnaRecipeResume(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {isMobile ?
                <Stack>
                    {getBody(props, classes)}
                </Stack>
                :
                <div className={classes.ratings}>
                    {getBody(props, classes)}
                </div>
            }
        </>
    );
}

function getBody(props, classes) {
    return (
        <>
            <div className={classes.rating}>
                <Typography variant="body1" className={classes.boldText}>
                    Calificación:
                </Typography>
                <Rating value={props.rating} readOnly></Rating>
            </div>
            <div className={classes.rating}>
                <Typography variant="body1" className={classes.boldText}>
                    Dificultad:
                </Typography>
                <Typography variant="body1">
                    {props.difficulty}
                </Typography>
            </div>

            {props.vegan === true ?
                <div className={classes.rating}>
                    <Typography variant="body1" className={classes.boldText}>
                        Apto vegano:
                    </Typography>
                    <Box
                        component="img"
                        className={classes.imageBoxSmall}
                        alt="Apto vegano"
                        src={vegan}
                    />
                </div>
                : <>
                </>
            }

            {props.celiac === true ?
                <div className={classes.rating}>
                    <Typography variant="body1" className={classes.boldText}>
                        Apto celíaco:
                    </Typography>
                    <Box
                        component="img"
                        className={classes.imageBoxSmall}
                        alt="Apto celíaco"
                        src={celiac}
                    />
                </div>
                : <>
                </>
            }
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        [theme.breakpoints.up('md')]: {
            paddingLeft: "100px",
            paddingRight: "100px",
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        paddingBottom: "25px",
        marginTop: "25px"
    },
    recipeImage: {
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
    imageBox: {
        height: 200,
        width: 200,
        maxHeight: { xs: 200, md: 200 },
        maxWidth: { xs: 200, md: 200 }
    },
    imageBoxSmall: {
        height: 23,
        width: 23,
        maxHeight: { xs: 23, md: 23 },
        maxWidth: { xs: 23, md: 23 },
    }
}));