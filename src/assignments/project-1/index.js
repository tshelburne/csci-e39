import React from "react";
import PropTypes from "prop-types";
import Uploader from "../../ui/components/uploader";
import "./app.scss";

const Uploads = ({ uploads, actions }) => {
  const pendingFiles = uploads.files.filter(
    ({ progress }) => progress && progress < 100
  );
  const completedFiles = uploads.files.filter(({ progress }) => !progress);

  return (
    <div className="wrapper">
      <h1>Golden Retrievers</h1>
      {/* do not delete this uploader component */}
      <div className="uploaderContainer">
        <Uploader className="uploader" upload={actions.upload} />
        <button className="button">Add a Goldie!</button>
      </div>
      {/* do not delete this uploader component */}
      <div className="pendingContainer">
        {pendingFiles.map(file => {
          const { id, name, progress } = file;

          return (
            <li key={id}>
              <label>{name}</label>
              <progress value={progress} max="100">
                {progress}%
              </progress>
            </li>
          );
        })}
      </div>
      <h2>Goldie Picture Album</h2>
      <div className="polaroidGrid">
        {completedFiles.map(file => {
          const { id, name, url, error } = file;

          return (
            <figure className="polaroid" key={id}>
              {!error && <img src={url} style={{ maxWidth: `200px` }} />}
              {!!error && <p className="failure">{error}</p>}
              <figcaption className="polaroid-caption">{name}</figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
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
