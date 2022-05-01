import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@material-ui/core';
import NonnaRecipeCard from './NonnaRecipeCard';

export default function NonnaTopRecipes() {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table sx={{ minWidth: 700 }} aria-label="Recetas destacadas">
                <TableBody>

                    <TableRow>
                    {rows.map((row) => (
                        <TableCell className={classes.cell} scope="row">
                            <NonnaRecipeCard imageUrl={row.imageUrl} title={row.title} description={row.description} />
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

function createData(title, description, imageUrl) {
    return {
        title,
        description,
        imageUrl
    };
}

const rows = [
    createData('Pollo teriyaki',
        "Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo",
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    ),
    createData('Tonkatsu',
        "Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo",
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    ),
    createData('Milangas de oro',
        "Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo",
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    ),
    createData('Cheese burger',
        "Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo",
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    ),
    createData('Fideos con salsa',
        "Receta de pollo que pollo y la pollo el pollo etc. Casi un lorem ipsum pero version pollo por pollo",
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    ),
];
