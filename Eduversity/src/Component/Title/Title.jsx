import React from 'react'
import './Title.css'

function Title(props) {
    return (
        <div className='title'>
            <p>{props.title}</p>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default Title
