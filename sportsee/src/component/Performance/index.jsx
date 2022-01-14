import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import React from 'react'
import './index.css'

function Performance({ data, kind}) {

    const titleKind = {
        cardio: 'Cardio',
        energy: 'Energie',
        endurance: 'Endurance',
        strength: 'Force',
        speed: 'Vitesse',
        intensity: 'Intensité',
    }

    const formatKind = (id) => titleKind[kind[id]]

    return (
        <div className='performanceChart'>
            <RadarChart outerRadius={90} width={258} height={264} data={data} startAngle={210} endAngle={570}>
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tickFormatter={formatKind} tick={{ fill: '#FFFFFF', fontSize: '0.75em'}}/>
                <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
            </RadarChart>
        </div>
    )
}

export default Performance  