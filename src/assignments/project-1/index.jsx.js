import React from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'

const Uploads = ({uploads, actions}) => {
  const pendingFiles = uploads.files.filter(({progress}) => progress && progress < 100)
  const completedFiles = uploads.files.filter(({progress}) => !progress)

  return <div>
    <body className="container">
      <header>
        <h1>Upload Images</h1>
      </header>
      <nav></nav>
      <main>
        {/* do not delete this uploader component */}
        <Uploader upload={actions.upload}/> {/* do not delete this uploader component */}
        <p>
          Mollit consectetur anim quis eiusmod voluptate officia fugiat amet labore voluptate fugiat mollit officia. Id occaecat labore consequat cupidatat occaecat proident cillum voluptate et velit et cupidatat nulla do commodo. Ea est cupidatat officia irure esse Lorem ullamco nostrud enim Lorem et consectetur tempor. Voluptate nisi nisi tempor officia anim irure officia cupidatat qui dolore ad voluptate Lorem occaecat. Eiusmod excepteur laborum est sint amet anim minim anim do. Dolore enim est ex elit consectetur non elit magna cillum veniam culpa reprehenderit aliqua exercitation. Eiusmod laborum exercitation incididunt in nulla ad mollit nulla amet cupidatat Lorem nostrud labore ullamco incididunt.
        </p>
        <h2>In Progress</h2>
        <ul>
          {pendingFiles.map(file => {
            const {id, name, progress} = file

            return <li key={id}>
              <label>{name}</label>
              <progress value={progress} max="100">{progress}%</progress>
            </li>
          })}
        </ul>

        <h2>Completed</h2>
        <ul>
          {completedFiles.map(file => {
            const {id, name, url, error} = file

            return <li key={id}>
              <label>{name}</label>
              {!error && <img src={url} style={{
                maxWidth: `200px`
              }}/>}
              {!!error && <p className="failure">{error}</p>}
            </li>
          })}
        </ul>
      </main>
      <aside></aside>
      <footer></footer>
    </body>
  </div>
}

const statusPropType = PropTypes.shape({
  status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
  message: PropTypes.string.isRequired
})

Uploads.propTypes = {
  uploads: PropTypes.shape({
    files: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      progress: PropTypes.number,
      url: PropTypes.string,
      error: PropTypes.string
    })).isRequired,
    update: statusPropType.isRequired,
    delete: statusPropType.isRequired,
    share: statusPropType.isRequired
  }).isRequired,
  actions: PropTypes.object.isRequired
}

export default Uploads
