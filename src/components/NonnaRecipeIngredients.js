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

function createData(ingredient) {
    return { ingredient };
  }
  
  const rows = [
    createData('1 Pollo troceado'),
    createData('1 cucharadita de sal'),
    createData('2 cucharadas de zumo de limón'),
    createData('1/2 cucharadita de pimienta negra'),
    createData('1 cucharada de pasta de ajo y jengibre'),
  ];

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
                        {rows.map((row) => (
                            <TableRow
                                key={row.ingredient}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ingredient}
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