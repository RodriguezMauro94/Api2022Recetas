import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@material-ui/core';

export default function MediaCard() {
  return (
    <div>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="Pollo Tandori"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pollo Tandori
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo creo queusted entiende
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="Pollo Tandori"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pollo Tandori
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo creo queusted entiende
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="Pollo Tandori"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pollo Tandori
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo creo queusted entiende
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="Pollo Tandori"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pollo Tandori
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo creo queusted entiende
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            
        </Grid>
    </div>
  );
}