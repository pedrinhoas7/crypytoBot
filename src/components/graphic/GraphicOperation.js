import Tooltip from 'material-ui/internal/Tooltip';
import { MuiThemeProvider } from 'material-ui/styles';
import { CartesianGrid, XAxis, YAxis, BarChart, Bar, Legend } from 'recharts';



export default function GraphicOperation(props) {
    console.log(props)
    return (
        <MuiThemeProvider>
                <BarChart width={1200} height={300} data={props.data}>
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

