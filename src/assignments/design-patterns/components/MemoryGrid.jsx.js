import React from 'react'
import PropTypes from 'prop-types'
import MemoryPair from "./MemoryPair.jsx"

import { areSiblings } from '../lib/memory'

class MemoryGrid extends React.Component {
  constructor (props) {
    super(props)

    let sources = props.sources
        .concat(JSON.parse(JSON.stringify(props.sources)))
    if(sources.length !== props.x * props.y) {
      console.warn(`[MemoryGrid] x * y !== double sources length: ${props.x} * ${props.y} !== ${sources.length}`)
      return
    }

    window.sources = JSON.parse(JSON.stringify(sources))

    let grid = []
    for(let i = 0; i < props.x * props.y; i++) {
      grid[i] = sources.splice(Math.floor(Math.random() * sources.length), 1)[0]
    }

    grid.forEach((source, sourceIndex) => {
      if(Number.isInteger(source.sibling))
        return

      console.log(source)

      let otherIndex = grid.findIndex(s => areSiblings(s, source))
      let other = grid[otherIndex]

      source.sibling = otherIndex
      other.sibling = sourceIndex
    })

    this.state = {
      grid
    }
  }

  render () {
    let style = {
      'gridTemplateColumns': `repeat(${this.props.x}, 1fr)`,
      'gridTemplateRows': `repeat(${this.props.y}, 1fr)`
    }

    window.grid = this.state.grid

    if(!this.state)
      return <div className="MemoryGrid component"></div>

    return (
<div className="MemoryGrid component" style={style}>
  {
    this.state.grid.map((source, i) => {
      return <MemoryPair isVisible={source.isVisible}
                         isLocked={source.isLocked}
                         sibling={source.sibling}
                         caption={source.caption}
                         imgSrc={source.imgSrc}
                         aspect={this.props.aspect}
                         key={'source_' + (i + 1)}
                         onChange={this.onMemoryPairChange.bind(this)} />
    })
  }
</div>
    )
  }

  /* handles propegation of state between memorypair objects */
  onMemoryPairChange ({sibling}) {
    let grid = this.state.grid.map(source => Object.assign({}, source))

    let doppelganger = grid[sibling]

    let selfIndex = doppelganger.sibling
    let self = grid[selfIndex]

    self.isVisible = !self.isVisible

    if(self.isVisible && doppelganger.isVisible) {
      self.isLocked = true
      doppelganger.isLocked = true
    }

    if(grid.every(x => x.isVisible)) {
      if (typeof this.props.onChange === 'function') {
        this.props.onChange("gameWon") // for onGameWon handler
      }
    } else {
      grid
          .filter(x => !(x === self || x === doppelganger || x.isLocked))
          .map(x => x.isVisible = false)
    }

    this.setState({grid})
  }
}

export default MemoryGrid
