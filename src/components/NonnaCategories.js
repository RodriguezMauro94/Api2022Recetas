import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import categories from '../mocks/categories.json'
import NonnaLink from './NonnaLink';

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
                                        <NonnaLink to={`/buscar/${cell.description}`}>
                                            <Card className={classes.card}>
                                                <CardActionArea className={classes.action}>
                                                    <CardMedia className={classes.media}
                                                        component="img"
                                                        image={cell.urlImage}
                                                        alt={cell.description}
                                                    />
                                                    <CardContent className={classes.content}>
                                                        <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                                            {cell.description}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </NonnaLink>
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
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"

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
