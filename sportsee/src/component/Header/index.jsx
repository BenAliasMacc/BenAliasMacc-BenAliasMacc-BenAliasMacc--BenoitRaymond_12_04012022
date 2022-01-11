import './index.css'
import propTypes from 'prop-types'

function Header({ userName }) {
    
    return (
        <div className='header'>
           <h1>Bonjour <span>{userName}</span></h1>
           <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
}

Header.propTypes = {
    userName: propTypes.string
}

export default Header
