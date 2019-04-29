import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader';
import Banner from './components/banner';
// import Profile from './components/profile';
import Adios from './components/adios';
import ToggleProfile from './components/toggleProfile';

import './app.scss';

const Uploads = ({ uploads, actions }) => {
  const pendingFiles = uploads.files.filter(
    ({ progress }) => progress && progress < 100
  );
  const completedFiles = uploads.files.filter(({ progress }) => !progress);

  return (
    <React.Fragment>
      <div class='container'>
        <Banner user={user} />

        <ToggleProfile user={user} className='profile' />

        <br />
        <label className='button'>
          {user.name.userName}: Click here to upload more photos.
          {/* do not delete this uploader component */}
          <Uploader className='uploader-file-input' upload={actions.upload} />
          {/* do not delete this uploader component */}
        </label>
        {/* When pendingFiles array is empty, pendingFiles.length is 0 so why doesn't it resolve to false? Use double bangs to force the Boolean */}
        {!!pendingFiles.length && <h4>Image upload in progress</h4>}
        <ul>
          {pendingFiles.map(file => {
            const { id, name, progress } = file;

            return (
              <li key={id}>
                <label>{name}</label>
                {/* Temporarily changed max file size upload to 10000kB in server.js and restarted the server, then loaded a 5Mb image so that uploading was slow enough to visually check that the progress bar was functioning correctly :) */}
                <progress value={progress} max='100'>
                  {progress}%
                </progress>
              </li>
            );
          })}
        </ul>
        {/* {completedFiles && <h4>All current image uploads completed.</h4>} */}
        <ul className='photoGrid'>
          {completedFiles.map(file => {
            const { id, name, url, error } = file;

            return (
              <li key={id}>
                <label>{name}</label>
                {!error && <img src={url} style={{ maxWidth: `200px` }} />}
                {!!error && <p className='failure'>{error}</p>}
              </li>
            );
          })}
        </ul>
        <Adios
          className='adios'
          first={user.name.firstName}
          last={user.name.lastName}
        />
      </div>
    </React.Fragment>
  );
};

const user = {
  name: {
    firstName: 'Dave',
    lastName: 'Morgan',
    userName: 'dmorg'
  },
  traits: [
    'an opportunistic photographer',
    'a terminal cynic',
    'an occasional cyclist',
    'an inveterate nomad',
    'an unrepentant geek',
    'an irascible curmudgeon'
  ]
};

const statusPropType = PropTypes.shape({
  status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
  message: PropTypes.string.isRequired
});

Uploads.propTypes = {
  uploads: PropTypes.shape({
    files: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
          .isRequired,
        name: PropTypes.string.isRequired,
        progress: PropTypes.number,
        url: PropTypes.string,
        error: PropTypes.string
      })
    ).isRequired,
    update: statusPropType.isRequired,
    delete: statusPropType.isRequired,
    share: statusPropType.isRequired
  }).isRequired,
  actions: PropTypes.object.isRequired
};

export default Uploads;
