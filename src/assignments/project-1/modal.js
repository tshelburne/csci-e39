import React from 'react'
import autobind from 'class-autobind'

export default class UpdateModal extends React.Component {
    constructor(props) {
        super(props)
        autobind(this)
        this.state = {
            name: this.props.file.name,
            description: this.props.file.description
        }
    }

    handleSubmit(event) {
        event.preventDefault()

        let name = this.state.name
        let description = this.state.description
        this.props.submit(this.props.file, {name, description})
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        })
    }

    updateDesc(event) {
        this.setState({
            description: event.target.value
        })
    }

    render() {
        return <div className="update-modal">
            <form className="update-modal--main" onSubmit={this.handleSubmit}>
                <h3>Update Image</h3>
                <label for="updateName">Name:</label>
                <input
                    id="updateName"
                    type="text"
                    value={this.state.name}
                    onChange={this.updateName}
                />
                <br/>
                <label for="updateDesc">Description:</label>
                <textarea
                    id="updateDesc"
                    value={this.state.description}
                    onChange={this.updateDesc}
                />
                <br/>
                <div className="update-modal--buttons">
                    <button type="submit">Submit</button>
                    <button className="button--cancel" onClick={this.props.cancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    }
}
