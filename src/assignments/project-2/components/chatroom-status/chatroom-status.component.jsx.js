import React from "react";
import PropTypes from "prop-types";

const ChatroomStatus = ({ statusMessage }) => {
	return (
		<div className="chatroom-status-container">
			<p className="chatroom-status">{statusMessage}</p>
		</div>
	);
};

ChatroomStatus.propTypes = {
	statusMessage: PropTypes.string.isRequired
};

export default ChatroomStatus;
