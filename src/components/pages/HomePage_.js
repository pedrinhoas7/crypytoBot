import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import banner from '../../assets/images/banner.png'
import robot1 from '../../assets/images/robot1.png'
import robot2 from '../../assets/images/robot2.png'
import robot3 from '../../assets/images/robot3.png'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { Avatar, Card } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageService from './HomePageService';
import StarBorderIcon from '@material-ui/icons/StarBorder';


function starRisc(risco) {
    let star = [];
    for (let i = 1; risco >= i; i++) {
        star.push(<StarBorderIcon variant="contained" />)
    }
    return star
}

export default function HomePage() {
    const classes = useStyles();
    const tablet = useMediaQuery('(min-width:970px)');
    const mobile = useMediaQuery('(max-width:650px)');
    const [robots, setRobots] = useState(undefined);

    useEffect(() => {
        async function getRobots(){
            const res = await HomePageService.getRobots();
            setRobots(res)
        }
        getRobots()
    }, []);

    return (
        <>
            <div className={classes.root}>
                {/* PARTE BRANCA */}

                <Accordion
                    expanded={false}
                    style={{ backgroundColor: '#ffffff', borderColor: '#000080' }} >
                    <AccordionSummary
                    >
                        <MuiThemeProvider>
                            <Typography className={classes.menu}>
                                <Avatar className={classes.avatar}>
                                    <img alt="" className={classes.imgAvatar} src={robot1} />
                                </Avatar>
                                Crypto Bot
                                <Link to="#" className={classes.link}>
                                    About
                                </Link>
                                <Link to="/singIn" className={classes.link}>
                                    Login
                                </Link>
                                <Link to="/singUp" className={classes.link}>
                                    Register
                                </Link>
                                <Link to="/singUp" className={classes.link}>
                                    Register
                                </Link>
                            </Typography>
                        </MuiThemeProvider>
                        <img className={classes.banner} src={banner} alt="" />
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                    </AccordionDetails>
                    <AccordionActions>
                    </AccordionActions>
                </Accordion>

                <Divider style={{ height: 30 }} />
                {/* ROBOTS*/}
                {robots !== undefined ? <p>{robots.map(robot => {
                    var fontSize;
                    tablet ? fontSize = 30: fontSize = 20
                    if(mobile){
                        fontSize = 10
                    }
                    return (
                        <>
                            <MuiThemeProvider>
                                <Card style={{ backgroundColor: '#993399', borderColor: '#000080' }}>
                                    <div className={classes.star} style={{fontSize: fontSize}}>
                                        {starRisc(robot.risco)}
                                    </div>
                                    <p className={classes.robotName} style={{fontSize: fontSize}} >
                                        {robot.name}
                                    </p>
                                    <p className={classes.description} style={{fontSize: fontSize}}>
                                        {robot.description}
                                    </p>
                                    <img className={classes.robotOne} src={robot.imagem} alt="" />
                                </Card>
                                <Divider style={{ height: 30 }} />
                            </MuiThemeProvider>

                        </>
                    )
                })}</p> : <p>dont work</p>}
            </div>
        </>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 20
    },
    star: {
        color: 'white',
        position: "relative",
        height: 1,
        justifyContent: "flex-end"
    },
    accordion: {
        height: 800
    },
    banner: {
        width: '100%',
    },
    divider: {
        height: '100%'
    },
    robotOne: {
        width: '30%',
        marginLeft: '60%',
    },

    menu: {
        position: 'absolute',
        width: '100%',
        marginLeft: '20%'
    },
    link: {
        color: 'white',
        margin: '3%'
    },
    avatar: {
        marginTop: 10,
        marginLeft: '5%'
    },
    imgAvatar: {
        width: '100%',
    },
    robotName: {
        marginLeft: 10,
        fontFamily: "cursive",
        color: "#ffffff",
        position: "absolute"
    },
    description:{
        marginLeft: 10,
        marginTop: '6%',
        width: '50%',
        fontSize: '100%',
        fontFamily: "cursive",
        color: "#ffffff",
        position: "absolute"
    }


}));