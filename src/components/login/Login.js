import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {  useState } from "react";
import validator from 'validator';
import logo from '../../assets/images/logo.png'
import { makeStyles } from '@material-ui/styles';
import FooterApp from '../FooterApp';
import CryptoJS from 'crypto-js'


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: "#ffffff",
        marginTop: '5%',
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


}));




export default function Login() {
    const classes = useStyles();
    let object;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [msgErrorEmail, setMsgErrorEmail] = useState("");
    const [msgErrorPassword, setMsgErrorPassword] = useState("");
    const [msgError, setMsgError] = useState("");
    const [disabledButton, setDisabledButton] = useState(true);

    function handleChangeEmail(e) {
        let value = e.target.value
        if (validator.isEmail(value)) {
            setEmail(value)
            setDisabledButton(false)
        } else {
            setEmail(undefined)
            setDisabledButton(true)
        }
    }

    function handleChangePassword(e) {
        let value = e.target.value
        setPassword(CryptoJS.MD5(value).toString(CryptoJS.enc.Base64))
        setMsgErrorPassword("")
        validatorForm()

    }
    function validatorForm() {
        console.log(email,password)
    }

    function submitForm(e) {

        e.preventDefault()
        object = {
            email: email,
            password: password
        }
        if(object){
            console.log(object)
        }else{
            setMsgError("Verique os dados")
        }
        


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
                        autoComplete="email"
                        autoFocus
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
                        autoComplete="current-password"
                    />
                    <div className={classes.error}>{msgErrorPassword}</div>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <div className={classes.error}>{msgError}</div>
                    <Button
                        disabled={disabledButton}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        Sign In
                    </Button>
                    <Grid >
                        <Grid item xs>
                            <Link className={classes.link} href="/forgotPassword" variant="body2"
                            color= "#993399">
                                Forgot password?
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