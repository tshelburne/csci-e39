import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Updater from './updater'

class Album extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
	}

	render() {
		const {photos, updateFile, ...inputProps} = this.props
			return <ul className = "grid-container">
				{photos.map(file => {
					const {id, name, url, description, error} = file
					return <li className = "card" key={id}>
						<label className = "card-title">{name}</label>
						{!error && <img className = "card-img" src={url} alt={description} />}
						{!error && <Updater className="form-input" formvalue={description} file={file} updateFile={updateFile}/>}
						{!!error && <p className="failure">{error}</p>}
					</li>
				})}
			</ul>
		}
}

export default Album