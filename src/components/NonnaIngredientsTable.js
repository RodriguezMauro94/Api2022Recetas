import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, TextField } from '@material-ui/core';

function createData(ingredient, quantity) {
    return {
        ingredient,
        quantity
    };
}

var rows = [
];

const headCells = [
    {
        id: 'ingredient',
        numeric: false,
        disablePadding: true,
        label: 'Ingrediente',
    },
    {
        id: 'quantity',
        numeric: true,
        disablePadding: false,
        label: 'Cantidad',
    }
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}>
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = (props) => {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} ingredientes seleccionados
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Ingredientes
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Eliminar">
                    <IconButton>
                        <DeleteIcon onClick={() => props.setTableRows([])} />
                    </IconButton>
                </Tooltip>
            ) : (
                <></>
            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

export default function NonnaIngredientsTable(props) {
    const classes = useStyles();
    const [tableRows, setTableRows] = useState([]);
    const [selected, setSelected] = useState([]);
    const [newIngredient, setNewIngredient] = useState('');
    const [quantityIngredient, setQuantityIngredient] = useState('');

    useEffect(() => {
        rows = props.ingredients ? props.ingredients : [];
        setTableRows(rows);
    }, []);

    const handleNewIngredientChange = event => {
        setNewIngredient(event.target.value);
    };

    const handleQuantityIngredientChange = event => {
        setQuantityIngredient(event.target.value);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = tableRows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    function addIngredient() {
        if (newIngredient != "" && quantityIngredient != "") {
            rows.push(createData(newIngredient, quantityIngredient));
            let newRows = rows.map((ingredient) => ingredient);
            setTableRows(newRows);
            props.callback(rows);
        }
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    function deleteSelected() {
        setTableRows(tableRows.filter(n => !selected.includes(n.ingredient)))
    }

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{ width: '100%', mb: 2 }}>
                    <EnhancedTableToolbar numSelected={selected.length} setTableRows={deleteSelected} />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 750 }}
                            aria-labelledby="tableTitle"
                            size='small'>
                            <EnhancedTableHead
                                numSelected={selected.length}
                                onSelectAllClick={handleSelectAllClick}
                                rowCount={tableRows.length}
                            />
                            <TableBody>
                                {tableRows.map((row, index) => {
                                    const isItemSelected = isSelected(row.ingredient);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.ingredient)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.ingredient + row.quantity}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.ingredient}
                                            </TableCell>
                                            <TableCell align="right">{row.quantity}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
            <div className={classes.ratings}>
                <TextField
                    label="Ingrediente"
                    variant="filled"
                    onChange={handleNewIngredientChange}
                />
                <TextField
                    label="Cantidad"
                    variant="filled"
                    onChange={handleQuantityIngredientChange}
                />
                <Button color="inherit" onClick={() => addIngredient()}>Agregar</Button>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    ratings: {
        display: "flex",
        gap: 25
    }
}));