import React, { useRef, useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";

export default function NonnaEditRecipe(props) {
    let navigate = useNavigate();
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    var ingredientRows = props.recipe.ingredients;
    var steps = props.recipe.steps;
    const [name, setName] = useState(props.recipe.name);
    const [description, setDescription] = useState(props.recipe.description);
    const [difficulty, setDifficulty] = useState(props.recipe.difficulty);
    const [vegan, setVegan] = useState(props.recipe.isVegan);
    const [celiac, setCeliac] = useState(props.recipe.isCeliac);
    const [category, setCategory] = useState(props.recipe.category);

    const uploadInputRef = useRef(null);

    function ingredientCallback(rows) {
        ingredientRows = rows;
    }

    function stepsCallback(rows) {
        steps = rows;
    }

    const handleCreateRecipe = (event) => {
        createRecipeEvent('active', event);
    };

    const handleDraftRecipe = (event) => {
        createRecipeEvent('draft', event);
    };

    function createRecipeEvent(status, event) {
        event.preventDefault();
        createRecipe({
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
            status: status
        }).then((data) => {
            navigate("../receta/" + data.createdRecipe, { replace: true });
        });
    }

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
                            defaultValue={props.recipe.name}
                            onChange={(event) => setName(event.target.value)}
                            className={classes.review}
                        />
                        <TextField
                            label="Descripción"
                            multiline
                            variant="filled"
                            maxRows={4}
                            defaultValue={props.recipe.description}
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
                                    defaultValue={props.recipe.isVegan}
                                    onChange={(event) => setVegan(event.target.value)} />
                            </div>

                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto celíaco:
                                </Typography>
                                <Checkbox id="celiac-check"
                                    defaultValue={props.recipe.isCeliac}
                                    onChange={(event) => setCeliac(event.target.value)} />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start" sx={{ marginTop: 5 }}>
                    <NonnaIngredientsTable callback={ingredientCallback} ingredients={props.recipe.ingredients} />
                </Grid>

                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h5" className={classes.subtitle}>Pasos</Typography>
                    <NonnaStepCreator callback={stepsCallback} steps={props.recipe.steps} />
                    <Stack spacing={2} direction="row">
                        <Button color="inherit" variant="outlined" onClick={handleDraftRecipe}>Guardar borrador</Button>
                        <Button color="inherit" variant="contained" onClick={handleCreateRecipe}>Publicar receta</Button>
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
