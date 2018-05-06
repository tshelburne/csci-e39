/**
 * Created by psimhadri on 4/20/18.
 */
import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class CompletedFileListComponent extends React.Component {
    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {completedFiles} = this.props;

        return <div className="completed-file-list-component">
            <h2 className="heading">Completed</h2>
            <ul className="completed-files">
                {completedFiles.map(file => {
                    const {id, name, url, error} = file;

                    return <li key={id} className="completed-file">
                        {/*<label>{name}</label>*/}
                        {!error && <img src={url} style={{maxWidth: `200px`}} />}
                        {!!error && <p className="failure">{error}</p>}
                    </li>
                })}
            </ul>
        </div>
    }
}

CompletedFileListComponent.propTypes = {
    completedFiles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        progress: PropTypes.number,
        url: PropTypes.string,
        error: PropTypes.string,
    })).isRequired
};

export default CompletedFileListComponent