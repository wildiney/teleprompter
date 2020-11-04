import React from 'react'

import './Teleprompter.css'

function Teleprompter({ position, fontSize, title, text }) {
    return (
        <main style={ { top: position + 'px', paddingTop: (fontSize * 1.5) / 2 } }>
            <h1 style={ { fontSize: fontSize + 'px', lineHeight: fontSize * 1.5 + 'px' } }  >{ title }</h1>
            <div
                className="textPrompter"
                style={ { fontSize: fontSize + 'px', lineHeight: fontSize * 1.5 + 'px' } }
            >
                { text }
            </div>
        </main >
    )
}

export default Teleprompter


