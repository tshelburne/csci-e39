//create a custom component called Description that returns a description
const Description = function(){
	return(
		<div>
			<Description className="description" desc="THIS IS A DESCRIPTION"/>
		</div>
	);
}

//render the component
//render it inside the HTML tag with the id 'description'
ReactDOM.render(<Description/>, document.getElementById('description'));

//create a function that creates a <Description> tag and passes it props, like a class and a message.
//note that props are {props.message} and {props.className}
function Heading(props){
	return(
		<p className={props.className}> {props.desc} </p>
	);
}
