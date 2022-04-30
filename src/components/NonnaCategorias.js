import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles';

export default function MediaCard() {
    const classes = useStyles();
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            
            
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            
            
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                    <CardActionArea className={classes.action}>
                        <CardMedia className={classes.media}
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                            alt="Pollo Tandori"
                        />
                        <CardContent className={classes.content}>
                            <Typography gutterBottom variant="h1" component="h1" className={ClassNames.font}>
                                 Pollo
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            
            
        </Grid>
    </div>
  );
}

  const useStyles = makeStyles((theme) => ({
    card: {
        position: "relative"
    },
    action:{
        position: "relative"
    },
    media: {
        position: "absolute",
        top: 0,
        right: 0,
        height: "100%",
        width: "100%"
      },
    content:{
        position: "relative",
        backgroundColor: "transparent",
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,.24)"
    }
  }));