import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import React from 'react'
import propTypes from 'prop-types'
import './index.css'

/**
 * Get Activity data from API
 * @param { Object } data
 * @return { jsx }
 */

function Activity({ data }) {

    // Format date
    const formatDay = (item) => (new Date(item)).getDate()

    /**
     * Custom Tooltip
     * @param { boolean } active 
     * @param { array } payload
     * @return { jsx || null }
     */
    const CustomTooltip = ({ active, payload }) => active ? (
        <div className="chart-tooltip">
            <div>{payload[0].value}kg</div>
            <div>{payload[1].value}kCal</div>
        </div>
    ) : null

    return (
        <div className="activityChart">
            <h2>Activité quotidienne</h2>
            <BarChart width={835} height={320} data={data} margin={{left: 32}}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="day" tickFormatter={formatDay}/>
                <YAxis yAxisId="kilogram" orientation="right" domain={['dataMin-5', 'dataMax+0']} tickCount={3}/>
                <YAxis yAxisId="calories" hide domain={['dataMin-100', 'dataMax+0']} />
                <Tooltip content={<CustomTooltip />}/>
                <Legend verticalAlign="top" align="right" height={96}/>
                <Bar yAxisId="kilogram" legendType="circle" dataKey="kilogram" fill="#282D30" name='Poids (kg)' barSize={7} radius={[5, 5, 0, 0]}/>
                <Bar yAxisId="calories" legendType="circle" dataKey="calories" fill="#E60000" name='Calories brûlées (kCal)' barSize={7} radius={[5, 5, 0, 0]}/>
            </BarChart>
        </div>
    )
}

Activity.propTypes = {
    data: propTypes.arrayOf(propTypes.shape({
        calories: propTypes.number.isRequired,
        kilogram: propTypes.number.isRequired,
        day: propTypes.string.isRequired
    }))
}

export default Activity
