import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import cx from 'classnames'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const ActiveCodeContext = React.createContext()

export const ActiveCodeProvider = ({children}) => {
	const [activeCode, setActiveCode] = useState(`react`)

	return <ActiveCodeContext.Provider value={{activeCode, setActiveCode}}>
		{children}
	</ActiveCodeContext.Provider>
}

const Example = ({title, children}) => {
	const {activeCode, setActiveCode} = useContext(ActiveCodeContext)

	return <div className="example">
		<h2 className="example--title">{title}</h2>

		<div className="example--rendered">
			<h3>Rendered output:</h3>
			{children}
		</div>

		<div className="example--toggles">
			<button
				onClick={() => setActiveCode(`html`)}
				className={cx({active: activeCode === `html`})}
			>
				HTML
			</button>
			<button
				onClick={() => setActiveCode(`react`)}
				className={cx({active: activeCode === `react`})}
			>
				React
			</button>
			<button
				onClick={() => setActiveCode(`off`)}
				className={cx({active: activeCode === `off`})}
			>
				Off
			</button>
		</div>

		{activeCode !== `off` &&
			<div className="example--code">
				<h3>Code sample:</h3>
				<pre>
					<code>
						{activeCode === `html` && renderHTML(children)}
						{activeCode === `react` && renderReactCode(children)}
					</code>
				</pre>
			</div>
		}
	</div>
}

Example.propTypes = {
	title: PropTypes.string,
}

export default Example

// HELPERS

function renderHTML(children) {
	return beautify.html(ReactDOMServer.renderToStaticMarkup(<React.Fragment>{children}</React.Fragment>))
}

function renderReactCode(children) {
	return jsxToString(<div>{children}</div>)
		.replace(/=\{true\}/g, ``)
		.replace(/^<div>.*\n([\S\s]*)<\/div>$/, `$1`)
}