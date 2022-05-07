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

    console.log(props.difficulty);

    return (
        <div className={classes.root}>
            <div className={classes.recipeImage}>
                <Box
                    component="img"
                    sx={{
                        height: 200,
                        width: 200,
                        maxHeight: { xs: 200, md: 200 },
                        maxWidth: { xs: 200, md: 200 },
                    }}
                    alt={props.recipeTitle}
                    src={props.image}
                />
            </div>
            <div>
                <Stack spacing={2}>
                    <Typography variant="h4" className={classes.boldText}>
                        {props.recipeTitle}
                    </Typography>
                    <Typography className={classes.landingTitle} variant="subtitle1">
                        {props.recipeDescription}
                    </Typography>
                    <div className={classes.ratings}>
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
                                    sx={{
                                        height: 23,
                                        width: 23,
                                        maxHeight: { xs: 23, md: 23 },
                                        maxWidth: { xs: 23, md: 23 },
                                    }}
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
                                    sx={{
                                        height: 23,
                                        width: 23,
                                        maxHeight: { xs: 23, md: 23 },
                                        maxWidth: { xs: 23, md: 23 },
                                    }}
                                    alt="Apto celíaco"
                                    src={celiac}
                                />
                            </div>
                            : <>
                            </>
                        }
                    </div>
                </Stack>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        paddingLeft: "100px",
        paddingRight: "100px",
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
}));