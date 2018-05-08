import React from 'react'
import PropTypes from 'prop-types'
import Example from './support/example.jsx'
import {LargeButton, SmallButton} from './components/button.jsx'
import Photo from './components/photo.jsx'
import PhotoAlbum from './components/photoAlbum.jsx'

class PatternLibrary extends React.Component {

	constructor(...args) {
		super(...args)

		this.state = {activeCode: `react`}
	}

	getChildContext() {
		return {
			activeCode: this.state.activeCode,
			setActiveCode: activeCode => this.setState({activeCode}),
		}
	}

	render() {
		return (
			<div className="style-guide">
				<h1>My Pattern Library!</h1>

        <Example title="Photo">
          <ul>
            <Photo 
              onClick={()=>alert('You clicked me!')}
              file= {{
                id: 1,
                name: 'kitty.jpg',
                url: 'https://i.pinimg.com/736x/c3/0e/9b/c30e9bbaef3532e9b5b8964024f25a71--princess-cat-princess-aurora.jpg',
                error: false,
              }}
            />
          </ul>
				</Example>

        <Example title="3 Column Photo Album">
          <PhotoAlbum
            gridColumns={3}
            images={[
              {
                id: 1,
                name: 'kitty1.jpg',
                url: 'http://images2.fanpop.com/image/photos/9100000/kitty-kitties-9109284-500-460.jpg',
                error: false,
              },
              {
                id: 2,
                name: 'kitty2.jpg',
                url: 'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=animal-pet-cute-259803.jpg&fm=jpg',
                error: false,
              },
              {
                id: 3,
                name: 'kitty3.jpg',
                url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg',
                error: false,
              },
              {
                id: 4,
                name: 'kitty4.jpg',
                url: 'https://www.factslides.com/imgs/black-cat.jpg',
                error: false,
              },
            ]}
            onPhotoClick={(index)=>alert(`You clicked photo ${index}!`)}
          />
        </Example>

        <Example title="4 Column Photo Album">
          <PhotoAlbum
            gridColumns={4}
            images={[
              {
                id: 1,
                name: 'kitty1.jpg',
                url: 'http://images2.fanpop.com/image/photos/9100000/kitty-kitties-9109284-500-460.jpg',
                error: false,
              },
              {
                id: 2,
                name: 'kitty2.jpg',
                url: 'https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?cs=srgb&dl=animal-pet-cute-259803.jpg&fm=jpg',
                error: false,
              },
              {
                id: 3,
                name: 'kitty3.jpg',
                url: 'http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg',
                error: false,
              },
              {
                id: 4,
                name: 'kitty4.jpg',
                url: 'https://www.factslides.com/imgs/black-cat.jpg',
                error: false,
              },
            ]}
            onPhotoClick={(index)=>alert(`You clicked photo ${index}!`)}
          />
        </Example>

        <Example title="Buttons">
          <LargeButton
            label="I'm full-width"
            onClick={() => alert('I am a big button')}
          />
          <SmallButton
            label="I'm small"
            onClick={() => alert('I am small button')}
          />
        </Example>
			</div>
		)
	}
}

PatternLibrary.childContextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default PatternLibrary