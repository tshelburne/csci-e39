// import React from 'react'
// import PropTypes from 'prop-types'
// import Album from './album.js'
// import Uploader from './uploader.js'
// import ProgressBar from './progress-bar'
// import Uploads from 'src/assignments/project-1/index.js'
// import autobind from 'class-autobind'
//
//
// class GalleryContainer extends React.Component {
//
//     constructor(){
//         super(...arguments)
//         autobind(this)
//     }
//
//     render() {
//
//         // const pendingFiles = this.props.uploads.files.filter(({progress}) => progress && progress < 100)
//         // const completedFiles = this.props.uploads.files.filter(({progress}) => !progress)
//         //
//         return <div id="grid-container">
//             <h1 id="gallery-header">Gallery</h1>
//             <ul class="album">
//                 {completedFiles.map(file => {
//                     return <Album file={file}/>
//                 })}
//             </ul>
//
//             <div class="uploader-container">
//                 <h2 class="uploader">Upload Images</h2>
//                 {/* do not delete this uploader component */}
//                 <Uploader upload={this.actions.upload}/>
//                 {/* do not delete this uploader component */}
//
//                 <ul>
//                     {pendingFiles.map(file => {
//                         return <ProgressBar file={file}/>
//                     })}
//                 </ul>
//             </div>
//
//             <Modal/>
//
//         </div>
//     }
// }
//
// const statusPropType = PropTypes.shape({
//     status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
//     message: PropTypes.string.isRequired,
// });
//
// GalleryContainer.propTypes = {
//     uploads: PropTypes.shape({
//         files: PropTypes.arrayOf(PropTypes.shape({
//             id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//             name: PropTypes.string.isRequired,
//             progress: PropTypes.number,
//             url: PropTypes.string,
//             error: PropTypes.string,
//         })).isRequired,
//         update: statusPropType.isRequired,
//         delete: statusPropType.isRequired,
//         share: statusPropType.isRequired,
//     }).isRequired,
//     actions: PropTypes.object.isRequired,
// }
//
// export default GalleryContainer
//
