//sourced from a post from Zoraida Cabrera-Mieles

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: this.props.defaultTab
		};
	}

	handleClick(pageName) {
		this.setState({ activeTab: pageName })
		this.props.handleTabClick(pageName)
	}

	render() {
		const tabs = this.props.tabsList;
		return (
			<ul className="tabs">
				{tabs.map((tab, key) => {
					const { name, iconName } = tab;
					return (
						<li key={key}>
							<button
							onClick={() => this.handleClick(name)}
							className={this.state.activeTab === name ? "active" : ""} >
								 {name}
							</button>
						</li>)
				})
				}
			</ul>
		)
	}
}