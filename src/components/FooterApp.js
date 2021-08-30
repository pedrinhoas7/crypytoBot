import react from 'react'
import { makeStyles } from "@material-ui/styles";
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { Box } from '@material-ui/core';


export default function FooterApp() {
    const classes = useStyles()
    return (
        <>
            <Box mt={8}>
                <div className={classes.root} >
                    <p align="center">
                        {'Copyright © '}
                        <Link className={classes.link} to="/">
                            cryptoBot
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </p>
                </div>
            </Box>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#263238",
        color: "#993399",
    },
    link: {
        color: "#000000",
        textDecoration: 'none'
    }
}));