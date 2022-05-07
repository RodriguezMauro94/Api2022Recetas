import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import NonnaLink from './NonnaLink';

export default function NonnaRecipeCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                width="140"
                image={props.imageUrl}
                alt={props.title}
            />
            <CardContent>
                <NonnaLink to={`/receta/${props.id}`}>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                </NonnaLink>
            </CardContent>
        </Card>
    );
}