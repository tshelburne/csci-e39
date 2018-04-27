import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import PendingFileListComponent from '../../ui/components/pending-file-list.component.jsx'
import CompletedFileListComponent from '../../ui/components/completed-file-list.component.jsx'
import autobind from 'class-autobind'

class Uploads extends React.Component {

    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        const {uploads, actions} = this.props;

        const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100);
        const completedFiles = uploads.files.filter(({progress}) => !progress);

        return <main>
                <header>
                    <h1> Upload Images </h1>
                    <Uploader upload={actions.upload}/>
                </header>
                <article className="main-content">
                    {/*<p class="content"></p>*/}
                    {/*<section class="dummy-cards">*/}
                        {/*<div class="dummy-card"></div>*/}
                        {/*<div class="dummy-card"></div>*/}
                        {/*<div class="dummy-card"></div>*/}
                    {/*</section>*/}
                    <CompletedFileListComponent completedFiles={completedFiles}></CompletedFileListComponent>
                </article>
                <aside className="card-list">
                    <article>
                        {/*<header class="list-heading">*/}
                            {/*<h1> People's List </h1>*/}
                        {/*</header>*/}

                        {/*<section class="first-section">*/}
                            {/*<div class="image"></div>*/}
                            {/*<div class="card-heading-text">*/}
                                {/*<h2> Title of the image </h2>*/}
                                {/*<p> Some text! </p>*/}
                            {/*</div>*/}
                        {/*</section>*/}

                        {/*<section class="rest">*/}
                            {/*<div class="image"></div>*/}
                            {/*<div class="card-heading-text">*/}
                                {/*<h2> Title of the image </h2>*/}
                                {/*<p> Some text! </p>*/}
                            {/*</div>*/}
                        {/*</section>*/}
                        <PendingFileListComponent pendingFiles={pendingFiles}></PendingFileListComponent>
                    </article>
                </aside>
                <footer></footer>
            </main>
        }
    }

    const statusPropType = PropTypes.shape({
        status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
        message: PropTypes.string.isRequired,
    });

    Uploads.propTypes = {
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
    };

    export default Uploads
