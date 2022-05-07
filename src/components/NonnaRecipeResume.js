import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, useMediaQuery } from '@material-ui/core';
import { Stack } from '@mui/material';
import NonnaRatings from './NonnaRatings'

export default function NonnaRecipeResume(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.root}>
            <div className={classes.recipeImage}>
                <Box
                    component="img"
                    className={classes.imageBox}
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
                    <NonnaRatings rating={props.rating}
                        difficulty={props.difficulty}
                        vegan={props.vegan}
                        celiac={props.celiac} />
                </Stack>
            </div>
        </div>
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