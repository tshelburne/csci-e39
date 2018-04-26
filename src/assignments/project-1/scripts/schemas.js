import PropTypes from 'prop-types'

export const status = PropTypes.shape({
	status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
	message: PropTypes.string.isRequired,
})

export const file = PropTypes.shape({
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	name: PropTypes.string.isRequired,
	progress: PropTypes.number,
	url: PropTypes.string,
	error: PropTypes.string,
})
