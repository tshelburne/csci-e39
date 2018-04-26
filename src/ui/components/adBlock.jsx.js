import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const AdBlock = props => {
	return (
		<Card>
			<CardMedia>
			    <img src={props.ad.src} />
			 </CardMedia>
		</Card>
	);
};

export default AdBlock;