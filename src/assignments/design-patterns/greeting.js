
import React from 'react'

const Greeting = ({name, children}) => {

return (
<div>
	<h1 className="header"> Hello, {name}! </h1>
{children}
</div>
)
}


export default Greeting