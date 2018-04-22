import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../../ui/components/uploader.jsx'
import List from './List.jsx'
import PendingFile from './PendingFile.jsx';

const UploadButton = ({pendingFiles, active, onClick, actions}) => {

    return (
        <div>
            <h2>Upload Image</h2>
            <div className="uploader">
            { !active && 
                <button className="image-item" onClick={onClick}>
                    <img className="button-image" src="http://chittagongit.com/images/add-image-icon-png/add-image-icon-png-12.jpg" />
                </button>
            }
            { !!active && 
                <div>
                    <Uploader upload={actions.upload} />

                    <List>
                    {pendingFiles.map((file, index) =>
                        <PendingFile
                            key={file.id}
                            file={file}
                        />
                    )}
                    </List>
                    <button className="nav-button" onClick={onClick}>Close</button>
                </div>
            }
        </div>
    </div>
    )
}

export default UploadButton

