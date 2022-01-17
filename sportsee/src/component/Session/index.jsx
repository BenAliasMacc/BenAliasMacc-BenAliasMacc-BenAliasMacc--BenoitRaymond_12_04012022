import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';
import React from 'react'
import './index.css'
import propTypes from 'prop-types'

function Session({ data}) {

    console.log(data);
    const daysWeek = { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }
    const formatDay = (item) => daysWeek[item]

    const CustomTooltip = ({ active, payload }) => active ? (
        <div className="chart-tooltip">
            <div>{payload[0].value} min</div>
        </div>
    ) : null

    return (
        <div className='sessionChart'>
            <h2>Durée moyenne des<br/>sessions</h2>
            <LineChart width={258} height={200} data={data}>
                <XAxis dataKey="day" fill='white' tickFormatter={formatDay} padding={{ left: 5, right: 5 }}/>
                <YAxis hide domain={['dataMin-10', 'dataMax+1']}/>
                <Tooltip content={CustomTooltip} />
                <Line type="monotone" dataKey="sessionLength" stroke="white" dot={{r: 0}}/>
            </LineChart>
        </div>
    )
}

Session.propTypes = {
    data: propTypes.arrayOf(propTypes.shape({
        day: propTypes.number.isRequired,
        sessionLength: propTypes.number.isRequired
    }))
}

export default Session
