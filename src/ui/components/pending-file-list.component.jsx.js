/**
 * Created by psimhadri on 4/20/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class PendingFileListComponent extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {pendingFiles} = this.props;

        return <div>
                    <h2>In Progress</h2>
                    <ul>
                        {pendingFiles.map(file => {
                            const {id, name, progress} = file;

                            return <li key={id}>
                                <label>{name}</label>
                                <progress value={progress} max="100">{progress}%</progress>
                            </li>
                        })}
                    </ul>
               </div>
    }
}

PendingFileListComponent.propTypes = {
    pendingFiles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        progress: PropTypes.number,
        url: PropTypes.string,
        error: PropTypes.string,
    })).isRequired
};

export default PendingFileListComponent


