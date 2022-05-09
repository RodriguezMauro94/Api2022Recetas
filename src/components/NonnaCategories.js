import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import categories from '../mocks/categories.json'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};


export default function NonnaCategories() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div>
            {
                getRows(isMobile).map((row) => {
                    return (
                        <Grid container spacing={2}>
                            {row.map((cell) => {
                                return (
                                    <Grid item xs={6} md={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea className={classes.action}>
                                                <CardMedia className={classes.media}
                                                    component="img"
                                                    image={cell.urlImage}
                                                    alt={cell.description}
                                                />
                                                <CardContent className={classes.content}>
                                                    <Typography gutterBottom variant="h2" component="h2" className={classes.font}>
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
        height: 140
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
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"

    },
    font: {
        textAlign: "center"
    }
}));

function getRows(isMobile) {
    var breakBy = isMobile ? 2 : 4;
    var tempCategories = [...categories];
    var rows = [];
    while (tempCategories.length !== 0) {
        rows.push(tempCategories.splice(0, breakBy));
    }
    return rows;
}
