import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class introText extends React.Component {
  
  constructor() {
		super(...arguments)
		autobind(this)
	}
  
  render(){
    return <p>test</p>
  }
  
}

export default introText