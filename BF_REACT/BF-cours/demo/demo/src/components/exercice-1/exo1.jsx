import PropTypes from 'prop-types'
import style from './exo1.module.css'

const Exo1 = ({firstname,age}) =>{

    // {age} = prompt('vous avez quel âge ?')
    // {firstname} = prompt('quel est votre prénom ?')

    return(
        <div >
            <div className={style.container}>
            <p className={style.firstname}> Bonjour {firstname} ! bienvenu sur l'appli</p>
            <p>Vous avez {age} ans :o !</p>
            </div>
           
        </div>
    )
}

Exo1.defaultProps = {
    age : 18
}

Exo1.propTypes = {
    firstname : PropTypes.string,
    age : PropTypes.number
}

export default Exo1