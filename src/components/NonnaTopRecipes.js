import * as React from 'react';
import { Grid } from '@material-ui/core';
import NonnaRecipeCard from './NonnaRecipeCard';

export default function NonnaTopRecipes() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <NonnaRecipeCard />
                </Grid>
                <Grid item xs={3}>
                    <NonnaRecipeCard />
                </Grid>
                <Grid item xs={3}>
                    <NonnaRecipeCard />
                </Grid>
                <Grid item xs={3}>
                    <NonnaRecipeCard />
                </Grid>
            </Grid>
        </div>
    );
}
