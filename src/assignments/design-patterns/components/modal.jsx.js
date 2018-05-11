import React from 'react'
import autobind from 'class-autobind';

class Modal extends React.Component {

    constructor(props) {
        super(props)
        autobind(this)

        this.state = { visible: false }
    }


    toggleModal(evt) {
        if (evt.target == evt.currentTarget) {
            evt.preventDefault()
            this.setState({ visible: !this.state.visible })
        }
    }

    render() {
        const { modalTriggerText } = this.props
        return (
            <div className="modal">
                <a href="#" className="modal-toggler" onClick={evt => this.toggleModal(evt)}>{modalTriggerText}</a>
                {this.state.visible && <ModalDiv callback={this.toggleModal} children={this.props.children} />}
            </div>
        )
    }
}

const ModalDiv = ({ callback, children }) => (
    // https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17
    <div className="modal-overlay" onClick={evt => callback(evt)}>
        <div className="modal-content">
            {children}
        </div>
    </div>
)

export default Modal