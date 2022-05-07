import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NonnaLink from './NonnaLink';

export default function NonnaRecipeCard(props) {
    return (
        <NonnaLink to={`/receta/${props.id}`}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    width="140"
                    image={props.imageUrl}
                    alt={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
        </NonnaLink>
    );
}