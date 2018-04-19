import React from 'react'

class ImageTitler extends React.Component {
  render() {
    return <div>
      <p>Panda name: </p>
      <input type="text" id="title" name="title" placeholder="Name this panda" />
    </div>
  }
}

export default ImageTitler
