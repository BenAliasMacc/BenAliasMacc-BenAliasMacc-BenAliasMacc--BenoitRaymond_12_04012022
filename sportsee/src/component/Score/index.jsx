import { PieChart, Pie, Cell } from 'recharts';
import React from 'react'
import './index.css'
import propTypes from 'prop-types'

/**
 * Get Score data from userData.score || userData.todayScore from API
 * @param { Object } data
 * @return { jsx }
 */
function Score({data}) {
	
	return (

		<div className='scoreChart'>		
      		<h2>Score</h2>
			<div className='innerCircle' >
				<PieChart width={160} height={160}>
					<Pie
                    cx={'50%'} cy={'50%'}
                    startAngle={90} endAngle={450}
                    innerRadius={'85%'} outerRadius={'100%'}
                    cornerRadius={'50%'}
                    dataKey="value"
                    data={[{name: 'score', value: data}, {name: 'total', value: 1 - data}]}
                    >
                        <Cell fill="#E60000" stroke="#E60000" />
                        <Cell fill="transparent" stroke="transparent" />
                    </Pie>
                    <Pie 
                    cx={'50%'} cy={'50%'}
                    outerRadius={'85%'}
                    fill="#FFFFFF"
                    data={[{name: 'ring', value: 100}]}
                    dataKey="value"
                    />
				</PieChart>

				<div className='objective'>
					<span>{data && data * 100}%</span><br/>de votre objectif
				</div> 
		    </div>
        </div>
	);
}

Score.propTypes = {
    data: propTypes.number.isRequired
}

export default Score