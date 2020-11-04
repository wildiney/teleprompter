import React from 'react'
import './Options.css'

function Options({ children, label }) {
    return (
        <div className="item">
            <label>{ label }</label>
            {children }
        </div>
    )
}

export default Options
