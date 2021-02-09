import React from 'react'
import PropTypes from 'prop-types'

import './Container.css'

const Container = props => <div className={`container ${props.className}`} id={props.id}>
  {props.children}
</div>

export default Container

Container.propTypes = {
  children: PropTypes.node.isRequired, //Anything you plave within the Contianer component
  className: PropTypes.string, //user defined class names for the Container component
  id: PropTypes.string //user defined id for the Container component
}
