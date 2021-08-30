import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useState } from "react";
import validator from 'validator';
import logo from '../../assets/images/logo.png'
import { makeStyles } from '@material-ui/styles';
import FooterApp from '../FooterApp';



export default function ForgoutPassword() {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [msgError, setMsgError] = useState("");

    function handleChangeEmail(e) {
        let value = e.target.value
        if (validator.isEmail(value)) {
        let value = e.target.value
            setEmail(value)
        }
    }

    function submitForm(e) {
        e.preventDefault()
       console.log(email)
    }

    return (
        <>
        <Container className={classes.root} component="main" maxWidth="xs">
            <div className={classes.paper}>
                    <img  className={classes.img} src={logo} alt={'logo'} />
                    <Typography variant="h4" color="#993399">
                        Crypto Bot
                    </Typography>
                <form onSubmit={submitForm} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        onBlur={handleChangeEmail}
                    />
                    <div className={classes.error}>{msgError}</div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        Redefinição de senha
                    </Button>
                    <Grid className={classes.link}>
                        <Grid item xs>
                            <Link className={classes.link} href="/singIn" variant="body2"
                            color= "#993399">
                                Login
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link className={classes.link} href="/singUp" variant="body2"
                            color= "#993399">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            
        </Container>   
        <FooterApp/>
    </>
    );
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#ffffff",
        marginTop: '5%'
    },
    paper: {
        /*   marginTop: theme.spacing(8), */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
    },
    img: {
        height: 150,
        marginTop: 10,
        marginBlockEnd: 10
        /*     margin: theme.spacing(1), */
        /* backgroundColor: theme.palette.secondary.main, */
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        /* marginTop: theme.spacing(1), */
    },
    error: {
        backgroundColor: "#ffebee",
        color: "#ff0000"
    },
    link:{
        margin: 15
    }


}));