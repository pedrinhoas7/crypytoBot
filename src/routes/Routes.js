import React from 'react';
import { Switch, BrowserRouter as Router, Route, } from 'react-router-dom';
import LayoutExterno from '../components/layout/LayoutExterno';
import LayoutInterno from '../components/layout/LayoutInterno';

console.log(localStorage.getItem('token'))
const Routes = () => (
    <Router>
        {localStorage.getItem('token') === null ? <Switch>
            <Route path="/" exact={true} component={LayoutExterno} />
            <Route path="/singIn" exact={true} component={LayoutExterno} />
            <Route path="/singUp" exact={true} component={LayoutExterno} />
            <Route path="/forgotPassword" exact={true} component={LayoutExterno} />
            <Route path="/howDoesItWork" exact={true} component={LayoutExterno} />
            <Route path="/home" exact={true} component={LayoutExterno} />
            <Route path="/estrategy" exact={true} component={LayoutInterno} />
            <Route path="/graphicOperation" exact={true} component={LayoutInterno} />
        </Switch> : <Switch>
        <Route path="/" exact={true} component={LayoutExterno} />
            <Route path="/singIn" exact={true} component={LayoutExterno} />
            <Route path="/singUp" exact={true} component={LayoutExterno} />
            <Route path="/forgotPassword" exact={true} component={LayoutExterno} />
            <Route path="/howDoesItWork" exact={true} component={LayoutExterno} />
            <Route path="/home" exact={true} component={LayoutExterno} />
            <Route path="/estrategy" exact={true} component={LayoutInterno} />
            <Route path="/graphicOperation" exact={true} component={LayoutInterno} />
        </Switch>}

    </Router>
);

export default Routes;