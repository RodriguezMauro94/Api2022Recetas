import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

export default function NonnaSectionTitle(props) {
    const classes = useStyles();

    return (
        <div className={classes.sectionRow}>
            <Typography variant="h5" className={classes.boldText}>
                {props.sectionTitle}
            </Typography>
            <div className={classes.sectionDivider}></div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    sectionRow: {
        display: "flex",
        alignItems: "center",
        marginTop: "24px",
        marginBottom: "5px",
        paddingLeft: "100px",
        paddingRight: "100px",
        gap: "25px"
    },
    sectionDivider: {
        backgroundColor: "#FF8A00",
        width: "25px",
        height: "2px",
        flexGrow: 1,
    },
    boldText: {
        fontWeight: 700
    }
}));