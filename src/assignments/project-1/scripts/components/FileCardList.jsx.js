/** FileCardList component - a cardlist */
import React from 'react'
import PropTypes from 'prop-types'

import FileCard from './FileCard.jsx.js'

import { file } from '../schemas'
const cards = PropTypes.arrayOf(file)

class FileCardList extends React.Component {  
  constructor (props) {
    super(props)
    this.state = {
      hiddenCards: []
    }
  }
  
  render () {
    return (
<ul className="FileCardList card-list list--images">
	{this.props.cards.map(card => this.state.hiddenCards.includes(card)
      ? '' 
      : (
  <li key={card.id}>
    <FileCard card={card} unmount={() => this.unmount(card)} />
  </li>
        )
  )}
</ul>
    )
  }
  
  unmount(card) {
    this.setState(prevState => ({
      hiddenCards: [...prevState.hiddenCards, card]
    }))
  }
}

FileCardList.propTypes = { cards }

export default FileCardList
