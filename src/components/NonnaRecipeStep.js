import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';

export default function NonnaRecipeStep(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.stepImage}>
                <Stack spacing={1}>
                    <Box
                        component="img"
                        className={classes.imageBox}
                        alt="Foto de portada"
                        src={props.stepImage}
                    />
                </Stack>
            </div>
            <div>
                <Stack spacing={2}>
                    <Typography variant="h4" className={classes.boldText}>
                        {props.stepTitle}
                    </Typography>
                    <Typography className={classes.landingTitle} variant="subtitle1">
                        {props.stepDescription}
                    </Typography>
                </Stack>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        paddingBottom: "20px",
        [theme.breakpoints.up('md')]: {
            paddingLeft: "100px",
            paddingRight: "100px",
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        marginTop: "10px"
    },
    stepImage: {
        marginRight: "40px"
    },
    rating: {
        display: "flex",
        gap: 5
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