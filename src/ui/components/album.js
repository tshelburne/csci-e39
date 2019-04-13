import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader';
import Progress from '../../ui/components/progress';
import List from '../../ui/components/list';
import Image from '../../ui/components/image';

import './album.scss'

const Album = ({ uploads, actions }) => {
    const pendingFiles = uploads.files.filter(({ progress }) => progress && progress < 100)
    const completedFiles = uploads.files.filter(({ progress }) => !progress)

    return (
        <section className="album">
            <article class="upload">
                <h2>Upload Images</h2>
                {/* do not delete this uploader component */}
                <Uploader upload={actions.upload} />
                {/* do not delete this uploader component */}
            </article>
            <article class="in-progress">
                <h2>In Progress</h2>
                <List>
                    {pendingFiles.map(file => {
                        const { id, name, progress } = file;
                        return <Progress key={id} name={name} progress={progress} />
                    })}
                </List>
            </article>
            <section class="photos">
                <h2>Completed Uploads</h2>
                <p>
                    These are some random images I had laying around. They may be pictures of guinea pigs from online,
                    pictures of minks from online, or old photos from college.
			</p>
                <p>
                    Since the database is local, they won't be included in the pull request.
			</p>
                <List>
                    {completedFiles.map(file => {
                        const { id, name, url, error } = file
                        return <Image key={id} name={name} url={url} error={error} />
                    })}
                </List>
            </section>
        </section>
    );
}

const statusPropType = PropTypes.shape({
    status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
    message: PropTypes.string.isRequired,
})

Album.propTypes = {
    uploads: PropTypes.shape({
        files: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
            name: PropTypes.string.isRequired,
            progress: PropTypes.number,
            url: PropTypes.string,
            error: PropTypes.string,
        })).isRequired,
        update: statusPropType.isRequired,
        delete: statusPropType.isRequired,
        share: statusPropType.isRequired,
    }).isRequired,
    actions: PropTypes.object.isRequired,
}

export default Album