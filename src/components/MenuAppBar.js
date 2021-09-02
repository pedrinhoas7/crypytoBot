import React from 'react';
import { makeStyles } from '@material-ui/styles';
import logo from '../assets/images/logo.png'
import logoName from '../assets/images/logoName.png'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider } from 'material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';


export default function HeaderApp() {
    const classes = useStyles()
    return (
        <MuiThemeProvider  >
            <img className={classes.logo} src={logo} alt="" />
            <img className={classes.logoName} src={logoName} alt="" />
            <AppBar position="static"  >
                <Toolbar className={classes.toolBar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                    >
                        <img src={logo} alt="logo" className={classes.logoMenu} />
                    </IconButton>
                    <Typography style={{ backgroundColor: "#000000", color: "#ffffff",width: '100%', height: 20, marginTop: -25 }}>
                        <Link to="/"  className={classes.link}>
                            HOME
                        </Link>
                        <Link to="/howDoesItWork" className={classes.link} >
                            HOW DOES IT WORKS?
                        </Link>
                        <Link to="/singUp"  className={classes.link}>
                            REGISTE
                        </Link>
                        <Link to="/singIn" underlineNone className={classes.link} >
                            LOGIN
                        </Link>
                        <Link to="/contactUs" className={classes.link} >
                            CONTACT US
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </MuiThemeProvider>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 20
    },
    logo: {
        width: '10.8%',
        marginLeft: '12%'
    },
    logoName: {
        width: '50%',
    },
    link:{
        color: "#D4AF37",
        margin: "5%",
        textDecoration: 'none'
    },
    toolBar: {
        backgroundColor: "#000000",
    }, 
    logoMenu:{
         width: 30,
    }
}));