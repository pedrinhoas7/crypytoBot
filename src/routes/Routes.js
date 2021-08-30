import React from 'react';
import {Switch, BrowserRouter as Router,Route,} from 'react-router-dom';
import LayoutExterno from '../components/layout/LayoutExterno';
import LayoutInterno from '../components/layout/LayoutInterno';


const Routes = () => (
    <Router>
        <Switch>
            {/* Login */}
            <Route path="/" exact={true} component={LayoutExterno}/>
            <Route path="/singIn" exact={true} component={LayoutExterno}/>
            <Route path="/singUp" exact={true} component={LayoutExterno}/>
            <Route path="/forgotPassword" exact={true} component={LayoutExterno}/>
            <Route path="/howDoesItWork" exact={true} component={LayoutExterno}/>
            <Route path="/estrategy" exact={true} component={LayoutInterno}/>
            <Route path="/graphicOperation" exact={true} component={LayoutInterno}/>
            {/* Home */}
            <Route path="/home" exact={true} component={LayoutExterno}/>
            
        </Switch>
    </Router>
);

export default Routes;