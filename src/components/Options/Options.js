import React from 'react'
import PropTypes from 'prop-types'

import './Options.css'

function Options ({ children, label }) {
  return (
    <div className="item">
      <label>{label}</label>
      {children}
    </div>
  )
}

Options.propTypes = {
  children: PropTypes.node,
  label: PropTypes.object
}

export default Options
