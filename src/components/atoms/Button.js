import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {name, onClick} = props;

    return (
        <button className="buttons__btn" onClick={onClick}>{name}</button>
    )
}

// Button.propTypes = {
//     name: PropTypes.element.isRequired,
//     name: PropTypes.string,
//     onClick: PropTypes.func
// }

export default Button