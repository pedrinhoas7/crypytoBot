import { MuiThemeProvider } from 'material-ui/styles';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import GraphicOperation from '../graphic/GraphicOperation';
import GraphicOperationService from '../graphic/GraphicOperationService';
import MenuAppBar from '../MenuAppBar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from 'material-ui';


 function StrategyList(props) {
  const [operation, setOperation] = useState()

  function value(){
    let value =  props.strategy.operation
    setOperation(value)
  }

    useEffect(() => {
    console.log(operation)
      function strategyRender(operation) {
        setOperation(operation)
      }
      strategyRender(operation)
    }, [2]);

  

  const classes = useStyles();
  return (
    <Card className={classes.rootListCard} style={{ backgroundColor: '#263238', color: "#ffffff" }}>
      <CardContent>
      <Typography style={{color: '#ffffff'}} color="textSecondary" gutterBottom>
      Strategy 1
        </Typography>
        <Typography  style={{color: '#ffffff'}} color="textSecondary">
        BTC/BUSD                                    21
        </Typography>
        <Divider />
        {operation !== undefined? operation.map(r=>{
          return (<Typography>{r.data} {r.name}</Typography>)
        }): ""}
      </CardContent>
    </Card>
  );
}


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
  const [strategy, setStrategy] = useState()
  const [operations, setOperations] = useState()

  useEffect(() => {
    async function getGraphicOperation() {
      const res = await GraphicOperationService.getGraphicOperation()
      setGraphic(res)
    }
    async function getStrategy() {
      const res = await GraphicOperationService.getStrategy()
      setStrategy(res)
      console.log(res)
    }
    getStrategy()
    getGraphicOperation()

  }, []);

  return (
    <>
      <div>
        <MenuAppBar />
        <MuiThemeProvider>
          <StrategyList strategy={strategy} />
          <StrategyCard />
          <Divider style={{ margin: 50 }} />
        </MuiThemeProvider>

        <GraphicOperation data={graphic} />
      </div>
    </>
  );
}



const useStyles = makeStyles({

  root: {
    width: 375,
    marginLeft: '60%',
    marginTop: -160
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
  rootListCard: {
    width: 500,
    marginLeft: '10%',
    marginTop: '2%',
    backgroundColor: '#000000'
  },
  bulletListCard: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  titleListCard: {
    fontSize: 14,
  },
  posListCard: {
    marginBottom: 12,
  },
});