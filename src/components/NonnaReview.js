import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Stack, Rating } from '@mui/material';

export default function NonnaReview(props) {
    const classes = useStyles();

    return (
        <Stack>
            <div className={classes.sectionRow}>
                <Typography variant="h6">
                    {props.reviewUser}
                </Typography>
                <Rating value={props.reviewRating} readOnly></Rating>
                <div className={classes.sectionDivider}></div>
            </div>
        </Stack>
    );
}

const useStyles = makeStyles((theme) => ({
    sectionRow: {
        display: "flex",
        alignItems: "center",
        marginTop: "25px",
        marginBottom: "5px",
        paddingLeft: "100px",
        paddingRight: "100px",
        gap: "15px"
    },
    sectionDivider: {
        backgroundColor: "#FF8A00",
        width: "25px",
        height: "2px",
        flexGrow: 1,
    }
}));