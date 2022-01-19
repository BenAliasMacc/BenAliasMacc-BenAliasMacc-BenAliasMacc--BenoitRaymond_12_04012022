import React, {useState, useEffect} from 'react'
import './index.css'
import propTypes from 'prop-types'
import caloriesIcon from '../../assets/caloriesIcon.svg'
import glucidesIcon from '../../assets/glucidesIcon.svg'
import lipidesIcon from '../../assets/lipidesIcon.svg'
import proteinIcon from '../../assets/proteinIcon.svg'

/**
 * Get Score data from userData.keyData from API
 * @param { Object } data
 * @param { number } value
 * @return { jsx }
 */
function KeyData({ data, value }) {

    const [keys, setKeys] = useState({ name: '', icon: '', unit:'' })

    useEffect(() => {
        if(data === "calorieCount") {
        
            setKeys({
                name: 'Calories',
                icon: caloriesIcon,
                unit: 'kCal'
            }) 
        }
        if(data === "proteinCount") {
        
            setKeys({
                name: 'Proteines',
                icon: glucidesIcon,
                unit: 'g'
            }) 
        }
        if(data === "carbohydrateCount") {
        
            setKeys({
                name: 'Glucides',
                icon: lipidesIcon,
                unit: 'g'
            }) 
        }
        if(data === "lipidCount") {
        
            setKeys({
                name: 'Lipides',
                icon: proteinIcon,
                unit: 'g'
            }) 
        }
    }, [data])

    


    return (
        <div className='keyData'>
            <img src={keys.icon} alt="" />
            <div>
                <h2>{Intl.NumberFormat('en', { maximumSignificantDigits: 3 }).format(value)}{keys.unit}</h2>
                <p className=''>{keys.name}</p>
            </div>
        </div>
    )
}

KeyData.propTypes = {
    data: propTypes.string.isRequired,
    value: propTypes.number.isRequired
}

export default KeyData  