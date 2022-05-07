import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stack, Rating } from '@mui/material';
import { Button, TextField } from '@material-ui/core';
import { orange } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

export default function NonnaCreateReview() {
    const classes = useStyles();

    return (
        <div className={classes.row}>
            <Rating />
            <PrimaryButton>Enviar reseña</PrimaryButton>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    row: {
        display: "flex",
        alignItems: "center",
        marginTop: "15px",
        marginBottom: "10px",
        paddingLeft: "100px",
        paddingRight: "100px",
        gap: "15px"
    },
    review: {
        borderRadius: "20px",
        marginTop: "25px",
        marginLeft: "100px",
        marginRight: "100px"
    },
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(orange[500]),
    backgroundColor: orange[500],
    '&:hover': {
        backgroundColor: orange[700],
    },
    borderRadius: 20,
    paddingLeft: "15px",
    paddingRight: "15px"
}));