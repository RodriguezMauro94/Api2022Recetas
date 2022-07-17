import React, { useRef, useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, Stack, Grid, Paper } from '@mui/material';
import { Box } from "@mui/system";
import NonnaIngredientsTable from "./NonnaIngredientsTable";
import NonnaStepCreator from "./NonnaStepCreator";
import difficulties from '../data/difficulties.json'
import categories from '../data/categories.json'
import { createRecipe } from "../api/recipeController";

export default function NonnaNewRecipe(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    var ingredientRows = [];
    var steps = [];
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [vegan, setVegan] = useState(false);
    const [celiac, setCeliac] = useState(false);
    const [category, setCategory] = useState('');

    const uploadInputRef = useRef(null);

    function ingredientCallback(rows) {
        ingredientRows = rows;
    }

    function stepsCallback(rows) {
        steps = rows;
    }

    const createRecipeEvent = (event) => {
        event.preventDefault();
        createRecipe({
            recipe: {
                user: window.sessionStorage.getItem("token"),
                ingredients: ingredientRows,
                steps: steps,
                name: name,
                description: description,
                urlImage: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
                difficulty: difficulty,
                vegan: vegan,
                celiac: celiac,
                category: category,
            }
        }).then((data) => {
            //TODO ir al detalle de la receta?
        });
    };

    return (
        <Paper sx={{ p: 3, margin: 1, maxWidth: 'auto', flexGrow: 1, marginTop: 2 }}>
            <Grid container spacing={1}>
                <Grid item spacing={1}>
                    <Typography variant="h4">Crear receta</Typography>

                    <Box
                        component="img"
                        sx={{
                            height: 200,
                            width: 200,
                            maxHeight: { xs: 200, md: 200 },
                            maxWidth: { xs: 200, md: 200 },
                        }}
                        alt="Foto de portada"
                        src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                    />
                    <input
                        ref={uploadInputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                    />
                    {/*onChange={onChange}*/}
                    <Grid item>
                        <Button
                            onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                            color="inherit"
                            variant="contained">
                            Subir Foto
                        </Button>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm container>
                    <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start">
                        <TextField
                            label="Título"
                            variant="filled"
                            maxRows={4}
                            onChange={(event) => setName(event.target.value)}
                            className={classes.review}
                        />
                        <TextField
                            label="Descripción"
                            multiline
                            variant="filled"
                            maxRows={4}
                            onChange={(event) => setDescription(event.target.value)}
                            className={classes.review}
                        />
                        <div className={classes.ratings}>
                            <FormControl className={classes.rating}>
                                <InputLabel id="difficulty-label">Dificultad</InputLabel>
                                <Select
                                    sx={{
                                        minWidth: 150
                                    }}
                                    labelId="difficulty-label"
                                    id="difficulty-select"
                                    value={difficulty}
                                    label="Dificultad"
                                    onChange={(event) => setDifficulty(event.target.value)}>
                                    {difficulties.map((difficulty) => {
                                        return (
                                            <MenuItem value={difficulty.key}>{difficulty.value}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>

                            <FormControl className={classes.rating}>
                                <InputLabel id="category-label">Categoría</InputLabel>
                                <Select
                                    sx={{
                                        minWidth: 150
                                    }}
                                    labelId="category-label"
                                    id="category-select"
                                    value={category}
                                    label="Categoría"
                                    onChange={(event) => setCategory(event.target.value)}>
                                    {categories.map((category) => {
                                        return (
                                            <MenuItem value={category.id}>{category.description}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </div>
                        <div className={classes.ratings}>
                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto vegano:
                                </Typography>
                                <Checkbox id="vegan-check"
                                    onChange={(event) => setVegan(event.target.value)} />
                            </div>

                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto celíaco:
                                </Typography>
                                <Checkbox id="celiac-check"
                                    onChange={(event) => setCeliac(event.target.value)} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start" sx={{ marginTop: 5 }}>
                    <NonnaIngredientsTable callback={ingredientCallback} />
                </Grid>

                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h5" className={classes.subtitle}>Pasos</Typography>
                    <NonnaStepCreator callback={stepsCallback} />
                    <Stack spacing={2} direction="row">
                        <Button color="inherit" variant="outlined">Guardar borrador</Button>
                        <Button color="inherit" variant="contained" onClick={createRecipeEvent}>Publicar receta</Button>
                    </Stack>
                </Grid>
            </Grid>
        </Paper>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 25,
        marginLeft: "100px",
        marginRight: "100px",
    },
    formRoot: {
        flexGrow: 1,
        display: "flex",
        marginTop: 15,
        paddingBottom: "50px",
    },
    recipeImage: {
        marginRight: "40px"
    },
    ratings: {
        display: "flex",
        gap: 25
    },
    boldText: {
        fontWeight: 700,
        margin: 5
    },
    rating: {
        display: "flex-root",
        gap: 5
    },
    review: {
        borderRadius: "20px",
        margin: 4,
        width: 350
    },
    subtitle: {
        marginTop: "25px"
    }
}));
