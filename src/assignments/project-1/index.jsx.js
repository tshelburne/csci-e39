import React from 'react'
import Component from 'react'
import PropTypes from 'prop-types'
import Uploader from '../../ui/components/uploader.jsx'
import autobind from 'class-autobind'
import AlbumCopy from './albumcopy.jsx'
import AuthorNames from './authorname.jsx'

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

        <AlbumCopy/>

        <AuthorNames>
          {'Ryan Seay'}
        </AuthorNames>

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
              {!error && <div className="perfundo">
                <a className="perfundo__link" href={"#" + name}>
                  <img src={url} style={{
                    maxWidth: `200px`
                  }}/></a>
                <div id={name} className="perfundo__overlay fadeInLeft">
                  <figure className="perfundo__content pefundo__figure">
                    <a href="#perfundo-untarget"><img src={url}></img></a>
                  </figure>
                </div>
              </div>}
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
