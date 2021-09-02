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
            <Link className={classes.link} to="/">
                <div className={classes.root} >
                    <p align="center">
                        {'Copyright © '}
                        
                            GrowYourCrypto
                        {' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </p>
                </div>
                </Link>
            </Box>
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#263238",
        color: "#D4AF37",
    },
    link: {
        color: "#D4AF37",
        textDecoration: 'none'
    }
}));