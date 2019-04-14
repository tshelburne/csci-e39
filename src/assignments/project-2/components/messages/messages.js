import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './messages.scss'
import Input from '../input/input';
import Message from '../message/message';
export default class Messages extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    const { chat, currentText, onType, onSend } = this.props;

    return (
      <article className={'messages'}>
        <h2>Messages</h2>
          <ul>
            {chat.messages.map(({id, student, text, createdAt}) =>
              <li key={id}>
                <Message name={name} createdAt={createdAt.toISOString()}></Message>
                <p>{text}</p>
              </li>
            )}
        </ul>
        <Input value={currentText} onType={onType} onSend={onSend} />
      </article>
    )
  }
}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
});

Messages.propTypes = {
	chat: PropTypes.shape({
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired
	})
}
