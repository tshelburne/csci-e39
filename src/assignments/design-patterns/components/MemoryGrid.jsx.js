import React from 'react'
import PropTypes from 'prop-types'
import MemoryPair from "./MemoryPair.jsx";

class MemoryGrid extends React.Component {
  constructor (props) {
    super(props)

    let sources = props.sources.concat(props.sources)
    if(sources.length !== props.x * props.y)
      return

    let grid = [];
    [...new Array(props.x)].forEach((x,i) => {
      [...new Array(props.y)].forEach((y,j) => {
        if(!grid[i])
          grid[i] = []
        grid[i][j] = sources.splice(Math.floor(Math.random() * sources.length), 1)
      })
    })

    this.state = {
      grid
    }
  }

  render () {
    return ({
      state.grid.map(source => {
        let sibling = this.state.grid.find(x => areSiblings(x, source))
        return <MemoryPair isVisible={source.isVisible} isLocked={source.isLocked} sibling={sibling} caption={source.caption} imgSrc={source.imgSrc} onChange={onMemoryPairChange} />
      })
    })
  }

  /* handles propegation of state between memorypair objects */
  onMemoryPairChange ({sibling}) {
    let grid = this.state.grid.map(source => Object.assign({}, source))

    let siblingIndex = this.state.grid.findIndex(x => x === sibling)
    let doppelganger = grid[siblingIndex]

    let selfIndex = grid.findIndex(x => areSiblings(doppelganger, x))
    let self = grid[selfIndex]

    self.isVisible = !self.isVisible

    if(self.isVisible && sibling.isVisible) {
      self.isLocked = true
      doppelganger.isLocked = true
    }

    grid
        .filter(x => x === self || x === doppelganger)
        .map(x => x.isVisible = false)

    if(grid.every(x => x.isVisible)) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange("gameWon") // for onGameWon handler
      }
    } else {
      grid.map(x => {
        if(x !== self && x !== sibling && !x.isLocked)
          x.isVisible = false
      })
    }

    this.setState({grid})
  }
}

function areSiblings (x, y) {
  if (x === y) return false

  return Object.keys(x).every(k => y.k === x.k)
}

export default MemoryGrid
