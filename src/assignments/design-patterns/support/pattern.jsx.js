import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import jsxToString from 'jsx-to-string'
import beautify from 'js-beautify'

const Pattern = ({title, children}, context) => (
	<section className="pattern">
		<h2 className="pattern--title">{title}</h2>

		<div className="pattern--rendered">
			<h3>Rendered output:</h3>
			{children}
		</div>

		<div className="pattern--toggles">
			<button
				onClick={() => context.setActiveCode(`html`)}
				className={context.activeCode === `html` ? `active` : ``}
			>
				HTML
			</button>
			<button
				onClick={() => context.setActiveCode(`react`)}
				className={context.activeCode === `react` ? `active` : ``}
			>
				React
			</button>
			<button
				onClick={() => context.setActiveCode(`off`)}
				className={context.activeCode === `off` ? `active` : ``}
			>
				Off
			</button>
		</div>

		{context.activeCode !== `off` && 
			<div className="pattern--code">
				<h3>Code sample:</h3>
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
	</section>
)

Pattern.propTypes = {
	title: PropTypes.string,
}

Pattern.contextTypes = {
	activeCode: PropTypes.string,
	setActiveCode: PropTypes.func,
}

export default Pattern