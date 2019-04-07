import React from 'react'
import autobind from 'class-autobind'

class Updater extends React.Component {
    constructor(props) {
      super(props)
      autobind(this)

      this.state = {value: ''}
    }
  
    handleChange(event) {
      this.setState({value: event.target.value})
    }
  
    handleSubmit(event) {
      const { updateFile, file} = this.props
      updateFile(file, {name: file.name, description : this.state.value })
      event.preventDefault()
    }
  
    render() {
    
      return (
        <form onSubmit={this.handleSubmit} className="description-form">
            <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Add Description"
            />
          <button className="button">Submit</button>
        </form>
      );
    }
  }

  export default Updater