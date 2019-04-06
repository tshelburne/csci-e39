import React from 'react'
import autobind from 'class-autobind'

export default class Modal extends React.Component {
    constructor(props) {
        super(props)
        autobind(this)
        this.state = {
            name: this.props.file.name,
            alt: this.props.file.description
        }
    }

    handleSubmit(event) {
        event.preventDefault()

        let name = this.state.name
        let description = this.state.alt
        this.props.submit(this.props.file, {name, description})
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        })
    }

    updateAlt(event) {
        this.setState({
            alt: event.target.value
        })
    }

    render() {
        return <div className="modal">
            <form className="modal--main" onSubmit={this.handleSubmit}>
                <h3>Update Image</h3>
                <label>
                    Name:
                    <input type="text" value={this.state.name} onChange={this.updateName}/>
                </label><br/>
                <label>
                    Alt Text:
                    <input type="text" value={this.state.description} onChange={this.updateAlt}/>
                </label><br/>
                <div className="modal--group">
                    <button type="submit">Submit</button>
                    <button className="button--cancel" onClick={this.props.cancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    }
}
