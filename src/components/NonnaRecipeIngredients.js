import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function NonnaRecipeIngredients(props) {
    const classes = useStyles();

    return (
        <Container>
            <Typography variant="h6" className={classes.title}>
                Ingredientes
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Ingredientes">
                    <TableBody>
                        {props.ingredients.map((row) => (
                            <TableRow
                                key={row.ingredient} >
                                <TableCell
                                    component="th"
                                    id={row.ingredient}>
                                    {row.ingredient}
                                </TableCell>

                                <TableCell >
                                    {row.quantity}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

const useStyles = makeStyles((theme) => ({
    title: {
        marginBottom: "20px",
        fontWeight: 700
    }
}));