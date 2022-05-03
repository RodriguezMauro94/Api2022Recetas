import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export default function NonnaCategories() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div>
            {
                getRows(isMobile).map((row) => {
                    return (
                        <Grid container spacing={3}>
                            {row.map((cell) => {
                                return (
                                    <Grid item xs={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea className={classes.action}>
                                                <CardMedia className={classes.media}
                                                    component="img"
                                                    image={cell.imageUrl}
                                                    alt={cell.description}
                                                />
                                                <CardContent className={classes.content}>
                                                    <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                                        {cell.description}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    )
                })}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    card: {
        position: "relative",
        maxWidth: 345,
        minWidth: 150,
        height: 150
    },
    action: {
        position: "relative"
    },
    media: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%"
    },
    content: {
        position: "relative",
        backgroundColor: "transparent",
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"

    }
}));

function createData(description, imageUrl) {
    return {
        description,
        imageUrl
    };
}

const categories = [
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    ),
    createData(
        'Pollo',
        'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60'
    )
]

function getRows(isMobile) {
    var breakBy = isMobile ? 2 : 4;
    var tempCategories = [...categories];
    var rows = [];
    while (tempCategories.length != 0) {
        rows.push(tempCategories.splice(0, breakBy));
    }
    return rows;
}
