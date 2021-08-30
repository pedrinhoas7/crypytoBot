import React, { Component} from 'react';
import {Switch,Route} from "react-router-dom";
import ForgoutPassword from '../login/ForgoutPassword';
import Login from '../login/Login';
import Register from '../login/Register';
import HomePage from '../pages/HomePage';
import HowDoesItWork from '../pages/HowDoesItWork';


class LayoutExterno extends Component{

    constructor(props) {
        super(props)
        this.state = {
        };
    }
  
    render(){
        return( 
                <Switch>
                    <Route path='/' exact={true}>
                        <HomePage/>
                    </Route>
                    <Route path='/singIn' exact={true}>
                        <Login/>
                    </Route>
                    <Route path='/singUp' exact={true}>
                        <Register/>
                    </Route>
                    <Route path='/forgotPassword' exact={true}>
                        <ForgoutPassword/>
                    </Route>
                    <Route path='/home' exact={true}>
                        <HomePage/>
                    </Route>
                    <Route path='/howDoesItWork' exact={true}>
                        <HowDoesItWork/>
                    </Route>

                </Switch>
            )
    }
}

export default LayoutExterno;