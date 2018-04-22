import PropTypes from 'prop-types'

const member = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
})

const message = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    student: PropTypes.member,
    createdAt: PropTypes.instanceOf(Date).isRequired,
})

export default {
    ...PropTypes,
    member,
    message,
}