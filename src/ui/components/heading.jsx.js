//create a custom component called app that returns a heading
const Heading = function(){
	return(
		<div>
			<Heading className="heading" message="THIS IS A HEADING"/>
		</div>
	);
}

//render the component
//render it inside the HTML tag with the id 'app'
ReactDOM.render(<Heading/>, document.getElementById('heading'));

//create a function that creates a <Heading> tag and passes it props, like a class and a message.
//note that props are: {props.message} and {props.className}
function Heading(props){
	return(
		<h1 className={props.className}> {props.message} </h1>
	);
}
