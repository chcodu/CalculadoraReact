import React from 'react'
import PropTypes from 'prop-types'

const Result = (props) => {
    //TODO: debugger se utiliza para depurar un código
    //debugger

    const { value } = props
    return (
            <div className="result">
                <span>{value}</span>
            </div>
        )
}
//TODO: Definir protypes
Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result