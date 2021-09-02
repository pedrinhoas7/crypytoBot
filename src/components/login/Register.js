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
import {  makeStyles } from '@material-ui/styles';
import FooterApp from '../FooterApp';
import CryptoJS from 'crypto-js';



const useStyles = makeStyles((theme) => ({
    root: {
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
        margin : 10,
        color: "#124284"
    }


}));




export default function Register() {
    const classes = useStyles();
    let object;
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [msgErrorEmail, setMsgErrorEmail] = useState("");
    const [msgErrorPassword, setMsgErrorPassword] = useState("");
    const [msgError, setMsgError] = useState("");

    function handleChangeName(e) {
        let value = e.target.value
        setName(value)
    }

    function handleChangeEmail(e) {
        let value = e.target.value
        if (validator.isEmail(value)) {
            let value = e.target.value
            setEmail(value)
        } 
    }

    function handleChangePassword(e) {
        let value = e.target.value
        if (validator.isStrongPassword(value)) {
            setPassword(value) 
        }else {
            setMsgError("Password não coencidem")
        }
    }

    function handleChangePasswordConfirm(e) {
        let value = e.target.value
        setPasswordConfirm(value)
    }

    function submitForm(e) {
        e.preventDefault()
        if (password === passwordConfirm & password !== "" & password !== undefined) {
            console.log(password,passwordConfirm)
            object = {
                name: name,
                email: email,
                password: password
            }
            console.log(object)
            setMsgError("")
        } else {
            console.log(password,passwordConfirm)
            setMsgError("Password não coencidem")
        }
    }

    return (
        <>
        <Container className={classes.root} component="main" maxWidth="xs">
            <div className={classes.paper}>
                <img className={classes.img} src={logo} alt={'logo'} />
                <Typography variant="h4" color="#124284">
                    Crypto Bot
                </Typography>
                <form onSubmit={submitForm} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoFocus
                        onBlur={handleChangeName}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onBlur={handleChangeEmail}
                    />
                    <div className={classes.error}>{msgErrorEmail}</div>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={handleChangePassword}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="passwordConfirm"
                        label="Password Confirm"
                        type="password"
                        id="passwordConfirm"
                        onChange={handleChangePasswordConfirm}
                    />
                    <div className={classes.error}>{msgErrorPassword}</div>
                    <div className={classes.error}>{msgError}</div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >
                        Sign In
                    </Button>
                    <Grid className={classes.link} >
                        <Grid item xs>
                            <Link className={classes.link} href="/singIn" variant="body2"
                                color="#124284">
                                {"Login"}
                            </Link>
                        </Grid>
                        <Grid item xs>
                            <Link className={classes.link} href="/forgotPassword" variant="body2"
                                color="#124284">
                                Forgot password?
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