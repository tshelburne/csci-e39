const mainMenu = function(){
	return{
		<nav className="mainMenu">
			<myMenu url="localhost:3000/" link="Home"/>
			<myMenu url="localhost:3000/faq.html" link="FAQs"/>
		</nav>
	}
}

ReactDOM.render('<mainMenu>', document.getElementById('mainMenu'));

function myMenu(props){
	return <a href='{props.url}'> {props.link} </a>
}
