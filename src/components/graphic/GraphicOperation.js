import Tooltip from 'material-ui/internal/Tooltip';
import { MuiThemeProvider } from 'material-ui/styles';
import { useState } from 'react';
import { CartesianGrid, XAxis, YAxis, BarChart, Bar, Legend } from 'recharts';
import GraphicOperationService from './GraphicOperationService';



export default function GraphicOperation(props) {
    console.log(props.data)
    return (
        <MuiThemeProvider>
            <BarChart width={730} height={250} data={props.data}>
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />    
                <Bar dataKey="amt" fill="#ffffff" ></Bar>
            </BarChart>
        </MuiThemeProvider>

    )

}

