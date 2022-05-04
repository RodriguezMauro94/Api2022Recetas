import React, { useRef } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { TextField, useMediaQuery } from '@material-ui/core';
import { Button, Checkbox, FormControl, InputLabel, MenuItem, Rating, Select, Stack } from '@mui/material';
import vegan from "../img/vegan.png";
import celiac from "../img/celiac.png";
import { Box } from "@mui/system";
import NonnaIngredientsTable from "./NonnaIngredientsTable";

export default function NonnaNewRecipeGeneralDescription(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const uploadInputRef = useRef(null);

    return (
        <div className={classes.root}>
            <Typography variant="h4">Crear receta</Typography>
            <div className={classes.formRoot}>
                <div className={classes.recipeImage}>
                    <Stack spacing={1}>
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
                        <Button
                            onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
                            color="inherit"
                            variant="contained">
                            Subir
                        </Button>
                    </Stack>
                </div>
                <Stack spacing={2}>
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
                </Stack>
            </div>
            <NonnaIngredientsTable />
        </div>
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
        fontWeight: 700
    },
    rating: {
        display: "flex",
        gap: 5
    },
    review: {
        borderRadius: "20px",
    }
}));


function createData(key, value) {
    return {
        key,
        value
    };
}

const categories = [
    createData(
        "chicken",
        "Pollo"
    ),
    createData(
        "meat",
        "Carne de Res"
    ),
    createData(
        "salad",
        "Ensalada"
    ),
]

const difficulties = [
    createData(
        "easy",
        "Fácil"
    ),
    createData(
        "medium",
        "Media"
    ),
    createData(
        "hard",
        "Difícil"
    ),
    createData(
        "legendary",
        "Nonna"
    )
]
