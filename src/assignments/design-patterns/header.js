import React from 'react'

const Header = ({text,...props}) => {
  return (<header class="header">
			<p>{text}</p>
      </header>
    )
}

export default Header
