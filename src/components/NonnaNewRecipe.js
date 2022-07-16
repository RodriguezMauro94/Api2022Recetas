import React, { useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Select, Stack, Grid, Paper } from '@mui/material';
import { Box } from "@mui/system";
import NonnaIngredientsTable from "./NonnaIngredientsTable";
import NonnaStepCreator from "./NonnaStepCreator";
import difficulties from '../data/difficulties.json'

export default function NonnaNewRecipe(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    var ingredientRows = [];

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const uploadInputRef = useRef(null);
    
    function ingredientCallback(rows) {
        ingredientRows = rows;
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
                            className={classes.review}
                        />
                        <TextField
                            label="Descripción"
                            multiline
                            variant="filled"
                            maxRows={4}
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
                                    value={age}
                                    label="Dificultad"
                                    onChange={handleChange}>
                                    {difficulties.map((difficulty) => {
                                        return (
                                            <MenuItem value={difficulty.key}>{difficulty.value}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>

                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto vegano:
                                </Typography>
                                <Checkbox id="vegan-check" />
                            </div>

                            <div className={classes.rating}>
                                <Typography variant="body1" className={classes.boldText}>
                                    Apto celíaco:
                                </Typography>
                                <Checkbox id="celiac-check" />
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start" sx={{marginTop:5}}>
                    <NonnaIngredientsTable callback={ingredientCallback} />
                </Grid>

                <Grid spacing={0.5} container direction="column" justifyContent="center" alignItems="flex-start">
                    <Typography variant="h5" className={classes.subtitle}>Pasos</Typography>
                    <NonnaStepCreator />
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" color="error">Eliminar receta</Button>
                        <Button color="inherit" variant="outlined">Guardar receta</Button>
                        <Button color="inherit" variant="contained">Subir receta</Button>
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
