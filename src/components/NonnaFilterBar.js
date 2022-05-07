import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Stack } from '@mui/material';
import { useParams, useSearchParams } from 'react-router-dom';
import { Box, Button, Checkbox, IconButton, MenuItem, Modal, Select } from '@material-ui/core';
import FilterIcon from '@mui/icons-material/FilterList';
import categories from '../mocks/categories.json'
import difficulties from '../mocks/difficulties.json'

export default function NonnaFilterBar(props) {
    let searchParams = useSearchParams();
    let params = useParams();
    const classes = useStyles();

    const [orderBy, setOrderBy] = React.useState('');
    const handleChange = (event) => {
        setOrderBy(event.target.value);
    };

    const [categoriesFilter, setCategories] = React.useState('');
    const handleChangeCategoriesFilter = (event) => {
        setCategories(event.target.value);
    };

    const [difficultiesFilter, setDifficulties] = React.useState('');
    const handleChangeDifficultiesFilter = (event) => {
        setDifficulties(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Stack className={classes.root}>
                <Typography variant="h4">
                    {(params.search === undefined) ?
                        "Recetas"
                        :
                        `Recetas de ${params.search}`
                    }
                </Typography>
                <div className={classes.sectionRow}>
                    <Typography variant="body1">
                        Ordenar por
                    </Typography>
                    <Select
                        sx={{
                            minWidth: 150
                        }}
                        labelId="order-by-label"
                        id="order-by-select"
                        value={orderBy}
                        label="Ordenar por"
                        onChange={handleChange}>
                        {orderCriterias.map((criteria) => {
                            return (
                                <MenuItem value={criteria.key}>{criteria.value}</MenuItem>
                            )
                        })}
                    </Select>
                    <div className={classes.divider}></div>
                    <IconButton color="inherit" aria-label="filtros" onClick={handleOpen}>
                        <Typography variant="body1" >
                            Filtros
                        </Typography>
                        <FilterIcon />
                    </IconButton>
                </div>
            </Stack>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
            >
                <Box sx={styleModal}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Filtrar recetas
                    </Typography>

                    <div className={classes.sectionRow}>
                        <Typography variant="body1">
                            Categoría:
                        </Typography>
                        <Select
                            sx={{
                                minWidth: 150
                            }}
                            labelId="categories-filter-label"
                            id="categories-filter-select"
                            value={categoriesFilter}
                            label="Ordenar por"
                            onChange={handleChangeCategoriesFilter}>
                            {categories.map((category) => {
                                return (
                                    <MenuItem value={category.id}>{category.description}</MenuItem>
                                )
                            })}
                        </Select>
                    </div>

                    <div className={classes.sectionRow}>
                        <Typography variant="body1">
                            Dificultad:
                        </Typography>
                        <Select
                            sx={{
                                minWidth: 150
                            }}
                            labelId="difficulties-filter-label"
                            id="difficulties-filter-select"
                            value={difficultiesFilter}
                            label="Ordenar por"
                            onChange={handleChangeDifficultiesFilter}>
                            {difficulties.map((difficulty) => {
                                return (
                                    <MenuItem value={difficulty.key}>{difficulty.value}</MenuItem>
                                )
                            })}
                        </Select>
                    </div>

                    <div className={classes.sectionRow}>
                        <Typography variant="body1">
                            Apto vegano:
                        </Typography>
                        <Checkbox id="vegan-check" />
                    </div>

                    <div className={classes.sectionRow}>
                        <Typography variant="body1">
                            Apto celíaco:
                        </Typography>
                        <Checkbox id="celiac-check" />
                    </div>

                    {/* TODO: Agregar Link aplicando filtros que redirija a la pagina de search con los parametros correspondientes */}
                    <Button>Aplicar filtros</Button>
                </Box>
            </Modal>
        </>
    );
}

const styleModal = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "25px",
        [theme.breakpoints.up('md')]: {
            paddingLeft: "100px",
            paddingRight: "100px",
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: "20px",
            paddingRight: "20px",
        },
    },
    divider: {
        flexGrow: 1
    },
    sectionRow: {
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        marginBottom: "5px",
        gap: "15px",
        flexGrow: 1
    }
}));

function createData(key, value) {
    return {
        key,
        value
    };
}

const orderCriterias = [
    createData(
        "categories",
        "Categorías"
    ),
    createData(
        "reviews",
        "Calificaciones"
    )
]