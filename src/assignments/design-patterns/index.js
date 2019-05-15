import React from 'react'
import PropTypes from 'prop-types'
import Example, {ActiveCodeProvider} from './support/example'

import Button from './components/button'
import List from './components/list'
import Player from './components/player'
import Video from './components/video'

import './app.scss'

const listItems = ['Knox', 'Robinson', 'Jordan', 'Mudiay', 'Hezonja'];


const PatternLibrary = () =>
	<ActiveCodeProvider>
		<div className="style-guide">
			<h1>KNICKS PATTERN LIBRARY</h1>

      <p>The goal of this project is to provide an NBA team's style guide. By changing the $primaryColor and $secondaryColor, this can be replicated for any NBA team. This example is for the New York Knicks. The colors were taken from  <a href="https://teamcolorcodes.com/new-york-knicks-color-codes/" target="_blank" >https://teamcolorcodes.com/new-york-knicks-color-codes/</a> 
        and some sample player images were taken from <a target="_blank" href="https://www.nyknicks.com">nyknicks.com</a>
      </p>

			<Example title="<Button>">
        <Button>Default Button</Button>
				<Button type='primary'>Primary Button</Button>
        <Button type='secondary'>Secondary Button</Button>
        <Button disabled type='primary'>Disabled Primary Button</Button>
        <Button disabled type='secondary'>Disabled Secondary Button</Button>
			</Example>

			<Example title="<List>">
				<List items={listItems}></List>
			</Example>

			<Example title="<Player>">
				<Player name={'Kevin Knox'} number={20} position={'Small forward'} img={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/20170329_MCDAAG_Kevin_Knox_II_j.jpg/440px-20170329_MCDAAG_Kevin_Knox_II_j.jpg'} />
			</Example>


			<Example title="<Video>">
        <Video name={'Last night\'s Highlights'} caption={'Another day another loss.'} src={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'} thumbnail={'https://mk0teamcolorcodtgc6i.kinstacdn.com/wp-content/uploads/2017/03/knicks_logo_colors-768x623.png'} />
			</Example>
		</div>
	</ActiveCodeProvider>

export default PatternLibrary