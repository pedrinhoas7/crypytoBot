import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageService from '../../components/pages/HomePageService'
import MenuAppBar from '../MenuAppBar';
import coinsIcon from '../../assets/images/coins.png'
import coinsIcon2 from '../../assets/images/coinsIcon2.png'
import FooterApp from '../FooterApp';

export default function HowDoesItWork() {
    const classes = useStyles();
    const tablet = useMediaQuery('(max-width:750px)');
    const mobile = useMediaQuery('(max-width:546px)');
    console.log(tablet, mobile)

    useEffect(() => {
        async function getCoins() {
            const res = await HomePageService.getCoins();
            console.log(res)
        }
        getCoins()


    }, []);

    return (
        <>
            <div className={classes.root} >
                <MenuAppBar />
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} variant="h5" component="h2">
                        Grow Your Crypto
                        </Typography>
                        <p className={classes.description} >
                        The Grow Your Crypto platform is an innovative way to invest in cryptoassets without having the fear of the Crypto Winter, where commonly Crypto assets crash 20-80% from their all time high levels.You can Dollar-Cost-Average into one of our investing strategies and not worry about when the next Bitcoin crash will happen.
                        </p>
                        <img className={classes.coinIcon1} src={coinsIcon} alt=""/>
                        <img className={classes.coinIcon2} src={coinsIcon2} alt=""/>
                    </CardContent>
                </Card>
                <FooterApp/>
            </div>
        </>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 20
    },
    card:{
        width: '80%',
        marginLeft: '10%',
        marginTop: 30
    },
    title:{
        margin: '5%'
    },
    description:{
        marginLeft: '5%',
        marginTop: 30,
        width: '80%'
    },
    coinIcon1:{
        width: '10%'
    },
    coinIcon2:{
        width: '20%',
        marginLeft: '60%'
    }
}));