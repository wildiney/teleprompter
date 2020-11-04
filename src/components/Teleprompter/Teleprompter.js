import React from 'react'
import PropTypes from 'prop-types'

import './Teleprompter.css'

function Teleprompter ({ position, fontSize, title, text, ease }) {
  const style = {
    top: position + 'px',
    paddingTop: (fontSize * 1.5) / 2,
    transition: !ease ? 'all 0.5s ease-out' : 'all 0.5s'
  }
  return (
    <main style={style}>
      <h1 style={{ fontSize: fontSize + 'px', lineHeight: fontSize * 1.5 + 'px' }} >{title}</h1>
      <div
        className="textPrompter"
        style={{ fontSize: fontSize + 'px', lineHeight: fontSize * 1.5 + 'px' }}
      >
        {text}
      </div>
    </main >
  )
}

Teleprompter.propTypes = {
  position: PropTypes.number,
  fontSize: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  ease: PropTypes.bool
}

export default Teleprompter
