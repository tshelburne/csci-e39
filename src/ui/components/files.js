import React from 'react'
import Modal from './modal'
import autobind from 'class-autobind'

export const PendingFiles = ({files}) => {
    return <ul>
        {files.map(file => {
            const {id, name, progress} = file

            return <li key={id}>
                <label>{name}</label>
                <progress value={progress} max="100">{progress}%</progress>
            </li>
        })}
    </ul>
}

export class CompletedFiles extends React.Component {
    constructor(props) {
        super(props)
        autobind(this)
        this.state = {
            updating: null,
            modal: false
        }
    }

    handleUpdate(file) {
        this.setState({
            updating: file,
            modal: true
        })
    }

    finishUpdate(file, {name, description}) {
        this.props.update(file, {name, description})
        this.setState({
            updating: null,
            modal: false
        })
    }

    cancelUpdate() {
        this.setState({
            updating: null,
            modal: false
        })
    }

    render() {
        const [success, fail] = this.props.files.reduce((out, file) => {
            let idx = file.error ? 1 : 0
            out[idx].push(file)
            return out
        }, [[], []])

        return <React.Fragment>
            <ul className="completed">
                {success.map(file => {
                    const {id, name, description, url, error} = file

                    return <li key={id}>
                        <img src={url} style={{maxWidth: `200px`}} alt={file.description} />
                        <label>{name}</label>
                        <button className="button--update" onClick={() => this.handleUpdate(file)}>
                            Update
                        </button>
                    </li>
                })}
                {fail.map(file => {
                    const {id, name, url, error} = file

                    return <li key={id}>
                        <label>{name}</label>
                        <p className="failure">{error}</p>
                    </li>
                })}
            </ul>
            {this.state.modal &&
                <Modal
                    file={this.state.updating}
                    submit={this.finishUpdate}
                    cancel={this.cancelUpdate}
                />
            }
        </React.Fragment>
    }

}
