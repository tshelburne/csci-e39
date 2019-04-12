import React from 'react';
import PropTypes from 'prop-types';
import UploadedItem from './UploadedItem';

class Album extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { completedFiles, ...initialProps } = this.props;

        return(
            <React.Fragment>
                <h2>Completed</h2>
                <ul className="completed-uploads">
                    {completedFiles.map(file => {
                        const {id, name, url, error} = file

                        return <li key={id}>
                            <UploadedItem id={id} name={name} url={url} error={error} />
                        </li>
                    })}
                </ul>
            </React.Fragment>
        )
    }
}

Album.propTypes = {
    completedFiles: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
        progress: PropTypes.number,
        url: PropTypes.string,
        error: PropTypes.string,
    })).isRequired
}

export default Album;