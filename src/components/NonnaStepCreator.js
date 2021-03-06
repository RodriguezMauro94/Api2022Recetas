import React, { useRef, useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import NonnaRecipeStep from './NonnaRecipeStep';

export default function NonnaStepCreator(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [steps, setSteps] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const uploadInputRef = useRef(null);

    useEffect(() => {
        setSteps(props.steps ? props.steps : []);
    }, []);

    function createData(title, description) {
        return {
            title,
            description
        };
    }

    function addStep(steps) {
        if (title != "" && description != "") {
            var createdSteps = steps;
            createdSteps.push(
                createData(
                    title,
                    description
                ),
            )
            let newSteps = createdSteps.map((step) => step);
            setSteps(newSteps);
            props.callback(createdSteps);
        }
    }

    return (
        <>
            {steps.map((step) => {
                return (
                    <NonnaRecipeStep
                        stepTitle={step.title}
                        stepDescription={step.description}
                        stepImage="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoaWNrZW58ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                    />
                )
            })}
            <div className={classes.root}>
                <div className={classes.stepImage}>
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
                            Subir Foto
                        </Button>
                    </Stack>
                </div>
                <div>
                    <Stack spacing={2}>
                        <TextField
                            label="T??tulo del paso"
                            variant="filled"
                            maxRows={4}
                            onChange={(event) => setTitle(event.target.value)}
                            className={classes.review}
                        />
                        <TextField
                            label="Descripci??n del paso"
                            multiline
                            variant="filled"
                            maxRows={4}
                            onChange={(event) => setDescription(event.target.value)}
                            className={classes.review}
                        />
                        <div>
                            <Button variant="outlined" color="error" onClick={() => addStep(steps)}>Agregar paso</Button>
                        </div>
                    </Stack>
                </div>
            </div>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        paddingBottom: "20px",
        marginTop: "10px"
    },
    stepImage: {
        marginRight: "40px"
    },
    rating: {
        display: "flex",
        gap: 5
    },
}));