import React from 'react'
import PropTypes from 'prop-types'

import { FiMenu } from 'react-icons/fi'

import './MenuButton.css'

function MenuButton ({ menuHandler }) {
  return (
    <button className="btn_menu" onClick={ menuHandler }><FiMenu width="100%" height="100%" /></button>
  )
}

MenuButton.propTypes = {
  menuHandler: PropTypes.func
}

export default MenuButton
