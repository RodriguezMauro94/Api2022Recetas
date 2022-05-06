import React, { useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import { Button, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function NonnaStepCreator() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const uploadInputRef = useRef(null);

    return (
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
                        label="Título del paso"
                        variant="filled"
                        maxRows={4}
                        className={classes.review}
                    />
                    <TextField
                        label="Descripción del paso"
                        multiline
                        variant="filled"
                        maxRows={4}
                        className={classes.review}
                    />
                    <div>
                        <Button color="inherit">Agregar paso</Button>
                        <Button color="inherit">Eliminar paso</Button>
                    </div>
                </Stack>
            </div>
        </div>
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