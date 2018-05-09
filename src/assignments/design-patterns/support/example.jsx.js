import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const Example = ({title, description, tags, children}, context) => (
	<div className="example">
		<h2 className="example--title">{title}</h2>
		<p>{description}</p>

		<div className="example--rendered">
			<h3 className="example--subtitle">Components In Use:</h3>
			{children}
		</div>

		<h3 className="example--subtitle">Component Tags:</h3>
		<h3 className="example--tags">{tags}</h3>

		<h3 className="example--subtitle">Code Examples:</h3>
		<div className="example--toggles">
			<button
				onClick={() => context.setActiveCode(`react`)}
				className={context.activeCode === `react` ? `active` : ``}
			>
				React
			</button>
			<button
				onClick={() => context.setActiveCode(`html`)}
				className={context.activeCode === `html` ? `active` : ``}
			>
				HTML
			</button>
			<button
				onClick={() => context.setActiveCode(`off`)}
				className={context.activeCode === `off` ? `active` : ``}
			>
				Off
			</button>
		</div>

		{context.activeCode !== `off` &&
			<div className="example--code">
				<pre>
					<code>
						{context.activeCode === `html` &&
							beautify
								.html(ReactDOMServer.renderToStaticMarkup(<div>{children}</div>))
								.replace(/^<div>.*\n([\S\s]*)<\/div>$/, `$1`)
						}

						{context.activeCode === `react` &&
							jsxToString(<div>{children}</div>)
								.replace(/=\{true\}/g, ``)
								.replace(/^<div>.*\n([\S\s]*)<\/div>$/, `$1`)
						}
					</code>
				</pre>
			</div>
		}
	</div>
)

Example.propTypes = {
	title: PropTypes.string,
}

Example.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Example
