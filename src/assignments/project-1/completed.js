import React from 'react'

class Completed extends React.Component {
    constructor(props) {
        super(props); //lets base class initialize
        this.state = {
            buttonClicked: false,
        };
        this.clicked = this.clicked.bind(this);
    }

    clicked() {
        console.log('List hidden: ' + this.state.buttonClicked);
        this.setState(state => ({
            buttonClicked: !state.buttonClicked
        }));
    }

    render(){
        //const completedFiles = this.props.completedFiles;
        return (
            <div class="group-actions">
                <h2>Completed</h2>
                <button class="button details" onClick={this.clicked}>{ this.state.buttonClicked ? 'Hide List' : 'Display List' }</button>
                {this.state.buttonClicked && <List files={this.props.completedFiles} />}
            </div>
        )
    }
}

const List = ({files}) => (
    <ul>
        {files.map(file => {
            const {id, name, url, error} = file

            return <li key={id}>
                <label>{name}</label>
                {!!error && <p className="failure">{error}</p>}
            </li>
        })}
    </ul>
)

export { Completed as default};