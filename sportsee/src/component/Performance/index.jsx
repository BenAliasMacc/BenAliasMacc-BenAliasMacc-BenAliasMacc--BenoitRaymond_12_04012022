import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import React from 'react'
import propTypes from 'prop-types'
import './index.css'

/**
 * Get Performance data from API
 * @param { Object } data
 * @param { string } kind
 * @return { jsx }
 */
function Performance({ data, kind}) {

    const titleKind = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    }

    /**
    * Format title
    * @param {number} id from URL
    */
    const formatKind = (id) => titleKind[kind[id]]

    return (
        <div className='performanceChart'>
            <RadarChart outerRadius='70%' width={258} height={280} data={data} startAngle={210} endAngle={570}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" dy={3} tickFormatter={formatKind} tick={{ fill: '#FFFFFF', fontSize: '0.75em'}} />
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
            </RadarChart>
        </div>
    )
}

Performance.propTypes = {
    data: propTypes.arrayOf(propTypes.shape({
        kind: propTypes.number,
        value: propTypes.number.isRequired
    })),
    kind: propTypes.objectOf(propTypes.string).isRequired
}

export default Performance  