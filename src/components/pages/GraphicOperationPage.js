import { MuiThemeProvider } from 'material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import GraphicOperation from '../graphic/GraphicOperation';
import  GraphicOperationService  from '../graphic/GraphicOperationService';
import MenuAppBar from '../MenuAppBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 375,
    marginLeft: '60%',
    marginTop: '2%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function StrategyCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        BALANCE                $2231.32 
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        WIN                                         21
        </Typography>
        <Typography variant="body2" component="p">
        LOSS                                      07
        </Typography>
        <Typography variant="body2" component="p">
        PROFIT                      $1231.32 
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' size="small" color="secondary">STOP OPERATION</Button>
      </CardActions>
    </Card>
  );
}



export default function GraphicOperationPage() {
    const [graphic, setGraphic] = useState()

    useEffect(() => {
        async function getGraphicOperation(){
            const res = await GraphicOperationService.getGraphicOperation()
            setGraphic(res)
        }
        getGraphicOperation()

    }, []);

    return (
        <>
            <div>
                <MenuAppBar/>
                <MuiThemeProvider>
                <StrategyCard/>
                </MuiThemeProvider>

            <GraphicOperation data={graphic}/>
            </div>
        </>
    );
}


