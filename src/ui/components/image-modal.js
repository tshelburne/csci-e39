import React from 'react'

class Modal extends React.Component {
    render() {
        return <div id="myModal" class="modal">

            <span class="close">&times;</span>

            <img class="modal-content" id="modalImg"/>
            <div id="caption"/>
        </div>
    }
}

export default Modal