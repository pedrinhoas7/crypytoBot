import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Divider from '@material-ui/core/Divider';
import { Card } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import HomePageService from './HomePageService';
import walletIcon from '../../assets/images/BTCwallet 1.png'
import btcLogo from '../../assets/images/btc.png'
import ethIcon from '../../assets/images/eth.png'
import bearIcon from '../../assets/images/bear2 1.png'
import upIcon from '../../assets/images/Up 2.png'
import rocketIcon from '../../assets/images/rocket 1.png'
import comSoonLogo from '../../assets/images/CommingSoon2 3.png'
import str2Icon from '../../assets/images/btcbag1 1.png'
import str3Icon from '../../assets/images/moon2 1.png'
import loginIcon from '../../assets/images/login5 1.png'
import growUpIcon from '../../assets/images/image 9.png'
import carteiraIcon from '../../assets/images/image 8.png'
import binanceIcon from '../../assets/images/Binance 1.png'
import { Box, Button } from '@material-ui/core';
import MenuAppBar from '../MenuAppBar';
import FooterApp from '../FooterApp';

function license(id){
    console.log(id)
}

export default function EstrategyPage() {
    const classes = useStyles();
    const tablet = useMediaQuery('(max-width:750px)');
    const mobile = useMediaQuery('(max-width:546px)');

    return (
        <>
            <div className={classes.root} >

                <MenuAppBar />
                <MuiThemeProvider  >
                    <Box display="flex" p={1} justifyContent="center" >
                        <Box p={1} order={1} >
                            {BtcStrategyOne(classes)}
                        </Box>
                        <Box p={1} order={2} >
                            {EthStrategyOne(classes)}
                        </Box>
                    </Box>
                    <Box display="flex" p={1} justifyContent="center" >
                        <Box p={1} order={1} >
                            {BtcStrategyTwo(classes)}
                        </Box>
                        <Box p={1} order={2} >
                            {EthStrategyTwo(classes)}
                        </Box>
                    </Box>
                    <Box display="flex" p={1} justifyContent="center">
                        <Box p={1} order={2} >
                            {BtcStrategyThree(classes)}
                        </Box>
                        <Box p={1} order={2} >
                            {EthStrategyThree(classes)}
                        </Box>
                    </Box>
                </MuiThemeProvider>
                <FooterApp />
            </div>


        </>
    );
}



function BtcStrategyOne(classes) {
    return (<>
        <Card className={classes.card} >
            <h5 className={classes.title}  > BTC Strategy 1</h5>
            <p className={classes.text}>BUSD.Targets minimizing Porfolio drawdown
            </p>
            <p className={classes.text}>Strategy goes long BTC Protects Capital Gains
            </p>
            <img src={walletIcon} alt="" className={classes.iconClasses} />
            <div className={classes.button}>
                <Button variant="outlined" onClick={license} >
                    License
                </Button>
            </div>

        </Card>
    </>)
}

function BtcStrategyTwo(classes) {
    return (<>
        <Card className={classes.card} >
            <h5 className={classes.title} > BTC Strategy 2</h5>
            <p className={classes.text}>The card layouts can vary to support the types of content they contain.
            </p>

            <img src={btcLogo} alt="" className={classes.coin} />
            <img src={upIcon} alt="" className={classes.up} />
            <div className={classes.button}>
                <Button variant="outlined" >
                    License
                </Button>
            </div>

        </Card>
    </>)
}

function BtcStrategyThree(classes) {
    return (<>
        <Card className={classes.card} >
            <h5 className={classes.title} > BTC Strategy 3</h5>
            <p className={classes.text}>The card layouts can vary to support the types of content they contain.
            </p>
            <img src={rocketIcon} alt="" className={classes.rocket} />
            <img src={bearIcon} alt="" className={classes.bear} />
            <img src={btcLogo} alt="" className={classes.coinStrategy3} />
            <div className={classes.button}>
                <Button variant="outlined" >
                    License
                </Button>
            </div>

        </Card>
    </>)
}

function EthStrategyOne(classes) {
    return (<>
        <Card className={classes.card}  >
            <h5 className={classes.title} > ETH Strategy 1</h5>
            <p className={classes.text}>The card layouts can vary to support the types of content they contain.
            </p>
            <img src={ethIcon} alt="" className={classes.coin} />
            <div className={classes.button}>
                <Button variant="outlined" >
                    License
                </Button>
            </div>

        </Card>
    </>)
}

function EthStrategyTwo(classes) {
    return (<>
        <Card className={classes.card}  >
            <h5 className={classes.title} > ETH Strategy 2</h5>
            <p className={classes.text}>The card layouts can vary to support the types of content they contain.
            </p>
            <img src={ethIcon} alt="" className={classes.coin} />
            <img src={upIcon} alt="" className={classes.up} />
            <div className={classes.button}>
                <Button variant="outlined" >
                    License
                </Button>
            </div>

        </Card>
    </>)
}

function EthStrategyThree(classes) {
    return (<>
        <Card className={classes.card} >
            <h5 className={classes.title} > Ethereum Strategy 3</h5>
            <p className={classes.text}>The card layouts can vary to support the types of content they contain.
            </p>
            <img src={rocketIcon} alt="" className={classes.rocket} />
            <img src={bearIcon} alt="" className={classes.bear} />
            <img src={ethIcon} alt="" className={classes.coinStrategy3} />
            <div className={classes.button}>
                <Button variant="outlined" >
                    License
                </Button>
            </div>

        </Card>
    </>)
}





const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: ''
    },
    iconClasses: {
        width: '30%',
        marginLeft: '70%',
        marginTop: -50
    },
    text: {
        width: '50%',
        marginLeft: '10%'
    },
    button: {
        marginLeft: '15%',
        marginTop: -40
    },
    card: {
        width: 500,
        height: '110%'
    },
    coin: {
        marginLeft: '70%',
        width: '25%',
        marginTop: -100
    },
    bear: {
        marginLeft: '70%',
        width: '25%',
        marginTop: -80

    },
    up: {
        marginLeft: '70%',
        width: '13%',
        marginTop: -150
    },
    rocket: {
        marginLeft: '75%',
        width: '30%',
        marginTop: -100

    },
    coinStrategy3:{
        marginLeft: '68%',
        width: '15%',
        marginTop: -150
    },
    title:{
        marginLeft: '5%',
        fontSize: 15
    }



}));