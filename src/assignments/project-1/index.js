import React from 'react';
import PropTypes from 'prop-types';
import Uploader from '../../ui/components/uploader';
import Banner from './components/banner';
import ToggleProfile from './components/toggle-profile';
import Adios from './components/adios';

import './styles/app.scss';

const Uploads = ({ uploads, actions }) => {
  const pendingFiles = uploads.files.filter(
    ({ progress }) => progress && progress < 100
  );
  const completedFiles = uploads.files.filter(({ progress }) => !progress);

  return (
    <React.Fragment>
      <div className='container'>
        <Banner user={user} />
        <main>
          <article>
            <p>A little bit about this site:</p>
            <p>
              Well, it's not that easy to write content about an empty album or
              page. And it will be empty when you (Tim and/or Natalya) first see
              it. I'm sure you'll add a couple of images to see how it all
              works.
            </p>
            <p>
              The two required components are the Banner and Adios, header and
              footer for the site. Properties are passed in in two different
              ways. <br />
              FWIW, I prefer the Adios approach:
              <pre>first = {'{user.name.firstName}'}</pre>A bit more typing but
              it makes clear what arguments Adios expects. Content? You're
              reading it. Responsive.
            </p>
            <p>
              Not quite sure whether I've satisfied part 2) of the assignment.
              The Profile component has state that controls whether it is
              displayed or not. So it is not actually 'linked' to the main page,
              as suggested for the FAQ page. Otherwise, I think it is
              functionally equivalent to a FAQ: a list of a few of my more, er,
              endearing character traits ;)
            </p>
          </article>
          {/* show/hide profile page */}
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

          <ul>
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
        </main>
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
