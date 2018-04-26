import React from 'react';

import LinearProgress from 'material-ui/LinearProgress';

const Progress = props => {
	return (
		<div>
			{props.pendingFiles.map(file => {
				const { id, name, progress } = file;

				return (
					<div key={id}>
						<LinearProgress mode="determinate" value={progress} max={100}/>
					</div>
				);
			})}
		</div>
	);
};

export default Progress;
