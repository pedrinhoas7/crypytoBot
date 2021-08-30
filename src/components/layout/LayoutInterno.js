import React, { Component} from 'react';
import {Switch,Route} from "react-router-dom";
import GraphicOperationPage from '../pages/GraphicOperationPage';
import EstrategyPage from '../pages/EstrategyPage';


class LayoutInterno extends Component{

    constructor(props) {
        super(props)
        this.state = {
        };
    }
  
    render(){
        return( 
                <Switch>
                    <Route path='/graphicOperation' exact={true}>
                       <GraphicOperationPage/>
                    </Route>
                    <Route path='/estrategy' exact={true}>
                        <EstrategyPage/>
                    </Route>
                </Switch>
            )
    }
}

export default LayoutInterno;