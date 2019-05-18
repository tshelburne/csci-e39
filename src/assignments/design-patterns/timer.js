import React from 'react'


class Timer extends React.Component{

constructor (props) {
	super(props)
	this.state = {
		count: 1000
}

}


render() {
const {count} = this.state

return (

<div>

<h1> The Final Countdown: {count}</h1>

</div>

	)

}
componentDidMount() {
	const {startCount} = this.props
	this.setState({
		count:startCount
	})

	this.myInterval = setInterval (() => {
this.setState(prevState => ({
	count: prevState.count - 1
}))

	}, 1000)

}

ComponentWillUnmount(){
clearInterval(this.myInterval)

}

}

export default Timer