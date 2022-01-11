import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './index.css'

function NavbarTop() {
    return (
        <div className='navbarTop'>
            <img src={logo} alt="Logo SportSee"/>
            <nav className='navbarTop__nav'>
                <Link to="/">Accueil</Link>
                <Link to="/">Profil</Link>
                <Link to="/">Réglage</Link>
                <Link to="/">Communauté</Link>
            </nav>
        </div>
    )
}

export default NavbarTop
