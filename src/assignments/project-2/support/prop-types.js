import PropTypes from 'prop-types'

const member = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
})

export default {
    ...PropTypes,
    member,
}