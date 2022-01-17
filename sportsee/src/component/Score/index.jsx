import { PieChart, Pie, Cell } from 'recharts';
import React from 'react'
import './index.css'
import propTypes from 'prop-types'

function Score({data}) {

	const pieData = [
		{ name: "completed", value: data && data, fillColor: "#FF0000" },
		{ name: "not-completed", value: 1 - data && data, fillColor: "transparent" },
	  ];
	
	return (

		<div className='scoreChart'>		
      		<h2>Score</h2>
			<div className='innerCircle' >
				<PieChart width={160} height={160}>
					<Pie
						data={pieData}
						dataKey="value"
						innerRadius={70}
						outerRadius={80}
						startAngle={90}
						endAngle={200}
					>						
					{pieData.map((entry, index) => (
					<Cell
						key={`cell-${index}`}
						fill={entry.fillColor}
						cornerRadius="50%"
					/>
					))}
					</Pie>
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