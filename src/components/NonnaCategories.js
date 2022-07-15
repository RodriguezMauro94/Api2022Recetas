import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import categories from '../data/categories.json'
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import NonnaLink from './NonnaLink';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function NonnaCategories() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    return (
        <div>
            {
                getRows(isMobile).map((row) => {
                    return (
                        <Container>
                            <Grid container spacing={2}>
                                {row.map((cell) => {
                                    return (
                                        <Grid item xs={6} md={3}>
                                            <NonnaLink to={`/buscar/${cell.description}`}>
                                                <Card className={classes.card}>
                                                    <CardActionArea className={classes.action}>
                                                        <CardMedia className={classes.media}
                                                            component="img"
                                                            image={cell.urlImage}
                                                            alt={cell.description}
                                                        />
                                                        <CardContent className={classes.content}>
                                                            <ThemeProvider theme={theme}>
                                                                <Typography gutterBottom variant="h4" component="h4" className={classes.font}>
                                                                    {cell.description}
                                                                </Typography>
                                                            </ThemeProvider>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </NonnaLink>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Container>
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
        position: "relative",
        height: 150
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
        backgroundColor: "rgba(0,0,0,0.14)"

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
