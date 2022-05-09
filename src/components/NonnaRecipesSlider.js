import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import NonnaRecipeCard from './NonnaRecipeCard';

export default function NonnaRecipesSlider(props) {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="Recetas destacadas">
                <TableBody>
                    <TableRow>
                    {props.data().map((row) => (
                        <TableCell className={classes.cell} scope="row">
                            <NonnaRecipeCard id={row.id} imageUrl={row.urlImage} title={row.name} description={row.description} />
                        </TableCell>
                    ))}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const useStyles = makeStyles(() => ({
    cell: {
      minWidth: '300px',
      maxWidth: '300px'
    },
}));
