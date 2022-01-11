import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import React from 'react'
import './index.css'

function Activity({ userActivity }) {
    console.log(userActivity);

    

    return (
        <div className="activityChart">
            <h2>Activité quotidienne</h2>
            <BarChart width={835} height={320} data={userActivity} margin={{left: 32}}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis orientation="right" tickCount={3} />
                <Tooltip contentStyle={{backgroundColor: 'red', color: 'white'}}/>
                <Legend verticalAlign="top" align="right" height={96} margin={{top: 100, right: 5, bottom: 5, left: 5 }}/>
                <Bar legendType="circle" dataKey="kilogram" fill="#282D30" name='Poids (kg)' barSize={7} type="monotone"/>
                <Bar legendType="circle" dataKey="calories" fill="#E60000" name='Calories brûlées (kCal)' barSize={7} type="monotone"/>
            </BarChart>
        </div>
    )
}

export default Activity
