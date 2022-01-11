import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import yogaIcon from '../../assets/yogaIcon.svg'
import swimIcon from '../../assets/swimIcon.svg'
import cycleIcon from '../../assets/cycleIcon.svg'
import dumbbellIcon from '../../assets/dumbbellIcon.svg'

function NavbarLeft() {
    return (
        <div className='navbarLeft'>
            <nav>
                <Link to="/"><img src={yogaIcon} alt="Yoga"/></Link>
                <Link to="/"><img src={swimIcon} alt="Nage"/></Link>
                <Link to="/"><img src={cycleIcon} alt="Vélo"/></Link>
                <Link to="/"><img src={dumbbellIcon} alt="Musculation"/></Link>
            </nav>
            <div className='copyright'><p>Copyright, SportSee 2020</p></div>
        </div>
    )
}

export default NavbarLeft
