import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import { Card } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageService from './HomePageService';
import ethLogo from '../../assets/images/eth.png'
import btcLogo from '../../assets/images/btc.png'
import busdLogo from '../../assets/images/busd.png'
import coinsLogo from '../../assets/images/coins.png'
import comSoonLogo from '../../assets/images/CommingSoon2 3.png'
import str2Icon from '../../assets/images/btcbag1 1.png'
import str3Icon from '../../assets/images/moon2 1.png'
import loginIcon from '../../assets/images/login5 1.png'
import growUpIcon from '../../assets/images/image 9.png'
import carteiraIcon from '../../assets/images/image 8.png'
import binanceIcon from '../../assets/images/Binance 1.png'
import { Box } from '@material-ui/core';
import MenuAppBar from '../MenuAppBar';
import FooterApp from '../FooterApp';

export default function HomePage() {
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
                
                <MenuAppBar/>
                <MuiThemeProvider  >
                    {coinCard(btcLogo, "BTC", 100, 100, 3, 3) }
                    {coinCard(ethLogo, "ETH", 100, 100, 3, 3) }
                    {coinCard(busdLogo, "BUSD", 100, 100, 3, 3) }
                    {bannerOne()}
                </MuiThemeProvider>
                <MuiThemeProvider  >
                    <Box display="flex" p={1} justifyContent="center"  style={{marginTop: 50}}>
                        <Box p={1} order={1} >
                            {stategyOneCard()}
                        </Box>
                        <Box p={1} order={2} >
                        {stategyTwoCard()}
                        </Box>
                        <Box p={1} order={3} >
                        {stategyThreeCard()}
                        </Box>
                    </Box>
                    {bannerTwo()}
                </MuiThemeProvider>
                
            </div>
            <MuiThemeProvider  >
                    <p style={{marginTop: 1100}}><FooterApp/></p>
                </MuiThemeProvider>
        </>
    );
}

function coinCard(coinLogo, coinName, coinValue, fontSizeDefiner, marginTopSizeDefiner, marginLeftSizeDefiner) {
    return (
        <>
            <div style={{ marginLeft: "75%", width: '18%' }}>
                <Divider style={{ height: 20 }} />
                <MuiThemeProvider>
                    <Card style={{ width: '100%' }}>
                        <p style={{ marginLeft: `${marginLeftSizeDefiner}%`, fontSize: `${fontSizeDefiner}%`, position: "absolute" }}>{coinName}</p>
                        <p style={{ marginLeft: `${marginLeftSizeDefiner}%`, color: "gray", fontSize: `${fontSizeDefiner}%`, fontWeight: "bold", position: "absolute", marginTop: `${marginTopSizeDefiner}%` }}>{coinValue}</p>

                        <img src={coinLogo} alt="" style={{ marginLeft: '60%', position: "static", width: "30%" }} />
                    </Card>
                </MuiThemeProvider>
            </div>
        </>
    )
}

function bannerOne() {
    return (
        <Card style={{ width: 700, height: 300, position: "absolute", marginLeft: 100, backgroundColor: "#124284", color: "#ffffff", marginTop: -250 }}>
            <h3 style={{ marginLeft: '30%' }}>Grow Your Crypto</h3>
            <img src={coinsLogo} alt="" style={{ marginLeft: '80%', position: "static", width: "15%" }} />
            <p style={{ width: '70%', marginLeft: '6%', marginTop: -80 }}>The Grow Your Crypto platform is an innovative way to invest in cryptoassets without having the fear of the Crypto Winter, where commonly Crypto assets crash 20-80% from their all time high levels.
                You can Dollar-Cost-Average into one of our investing strategies and not worry about when the next Bitcoin crash will happen.</p>
            <a href="/howDoesItWork" style={{ marginLeft: '80%', color: "#F9CD34" }}>LEARN MORE...</a>

        </Card>
    )
}

function bannerTwo() {
    return (
        <Card style={{ width: 1090, position: "absolute", marginLeft: '5%', backgroundColor: "#124284", color: "#ffffff", marginTop: 0 }}>
            <div style={{margin: '3%'}}>
                <img src={loginIcon} alt="" style={{ width: "5%", marginLeft: '5%' }} />
                <p style={{width: '80%', marginLeft: '12%',  marginTop: -50}}> REGISTER in the GROW your Crypto Platform</p>
            </div>
            
            <div style={{margin: '3%'}}>
            <img src={binanceIcon} alt="" style={{width: "5%", marginLeft: '5%' }} />
            <p style={{width: '80%', marginLeft: '12%',  marginTop: -50}}> CONNECT YOUR BINANCE ACCOUNT
By creating a Binance API and connecting to the GROWurCrypto Platform.</p>
            </div>
            
            <div style={{margin: '3%'}}>
            <img src={growUpIcon} alt="" style={{ width: "5%", marginLeft: '5%' }} />
            <p style={{width: '80%', marginLeft: '12%',  marginTop: -50}}> GROW Ur Crypto will buy and sell automatically following our proprietary algorithm</p>
            </div>
            
            <div style={{margin: '3%'}}>
            <img src={carteiraIcon} alt="" style={{ width: "5%", marginLeft: '5%' }} />
            <p style={{width: '80%', marginLeft: '12%', position:"absolute", marginTop: -50}}> GROW Ur Crypto Buys and Sell your crypto assets to maximize profit, but NEVER withdraw assets. Your money never leaves your Binance wallet.</p>
            </div>
            
        </Card>
        
    )
}

function stategyOneCard() {
    return (<>
        <Card style={{width: 350,height: 220}} >
        <h5 style={{marginLeft: '30%'}}> STRATEGY 1</h5>
        <img src={coinsLogo} alt="" style={{position: "static", width: "13%" }} />
        <p style={{width: '70%', marginLeft: '20%', marginTop: -50}}>This strategy focus in increasing your BTC coins as time passes. It does it by benefiting from the Bitcoin trends, selling when trends weaken, and trends are starting. This is the ideal strategy for a HODLer that wants to diversify his strategy and to minimize Portfolio Drawdowns.</p>
        </Card>
    </>)
}

function stategyTwoCard() {
    return (<>
        <Card style={{width: 350, height: 220}} >
        <h5 style={{marginLeft: '30%'}}>STRATEGY 2</h5>
        <img src={str2Icon} alt="" style={{position: "static", width: "15%", marginTop: 0 }} />
        <img src={comSoonLogo} alt="" style={{position: "static", width: "30%", marginLeft: '20%'}} />
        <p style={{width: '70%', marginLeft: '20%', marginTop: -5}}>Strategy 2 is focused in capital increase by using leverage. Returns in a bull market will increase by 2 to 4 times. During a bear market the capital is preserved with the use of Dollar Stable Coins.</p>
        </Card>
    </>)
}

function stategyThreeCard() {
    return (<>
        <Card style={{width: 350, height: 220}} >
        <h5 style={{marginLeft: '30%'}}>STRATEGY 3</h5>
        <img src={str3Icon} alt="" style={{position: "static", width: "15%" }} />
        <img src={comSoonLogo} alt="" style={{position: "static", width: "30%", marginLeft: '20%'}} />
        <p style={{width: '70%', marginLeft: '20%', marginTop: -5}}><b>ALL-WEATHER-CRYPTO!</b> In this advanced strategy, you are looking for returns no matter if the Crypto assets are in a bull market, or in a bear market (Crypto Winter).</p>
        </Card>
    </>)
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
    logo: {
        width: '10.8%',
        marginLeft: '12%'
    },
    logoName: {
        width: '50%',
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
        marginLeft: '5%'
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
    description: {
        marginLeft: 10,
        marginTop: '6%',
        width: '50%',
        fontSize: '100%',
        fontFamily: "cursive",
        color: "#ffffff",
        position: "absolute"
    },
    mobile: {
        color: "white"
    },
    coin: {

    }


}));