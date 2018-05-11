import React from "react";

export default function Button({ color, text, onClick }) {
	return (
		<button
			style={{ backgroundColor: color }}
			className="custom-button"
			type="button"
			onClick={onClick}
		>
			{text}
		</button>
	);
}
