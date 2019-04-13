//sourced from Zoraida Cabrera-Mieles post
class AlbumApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentPage: "album"
		};
	}

	setPage(page) {
		this.setState({ currentPage: page })
	}

	render() {

		const tabsList = [{ name: "album" },{ name: "faq" }]

		return (
			<React.Fragment>

					<header>
						<h1>Album Title</h1>
					</header>

					<nav>
						<Tabs defaultTab="album" handleTabClick={this.setPage.bind(this)}  tabsList={tabsList} />
					</nav>
					<main>
						{this.state.currentPage === "album" &&
							<Album />}
						{this.state.currentPage === "faq" && <Faq />}
					</main> 
			</React.Fragment>
		)
	}
}

