import PropTypes from 'prop-types'//npm i prop-types
import style from './welcome.module.css'

const Welcome = ({firstname,lastname}) =>{
    //* les props sont destructuré en firstname et lastname

    return (
        <div>
            <p className={style.message}>Bienvenu sur la demo de <span className={style['full-name']}> {lastname} {firstname}</span>!</p>
        </div>
    )
}

Welcome.defaultProps = {
    //pas de valeur par défault avec un isRequired
    lastname: ''
}

Welcome.propTypes = {
    firstname : PropTypes.string.isRequired,
    lastname : PropTypes.string
}

export default Welcome