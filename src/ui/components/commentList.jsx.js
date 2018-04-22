import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down';

const CommentList = props => {
	return (
		<div>
			{props.chat.messages.map(file => {
				const { id, student, text, createdAt} = file;

				return (
									<Card key={id} style={{margin: "20px"}}>
									    <CardHeader
									      title={text}
									      subtitle={createdAt.toISOString()}/>
									    <CardActions>
									      <IconButton touch={true} iconStyle={{color: "#00aa8d"}}><ActionThumbUp /></IconButton>
									       <IconButton touch={true} iconStyle={{color: "#bb1010"}}><ActionThumbDown/></IconButton>
									    </CardActions>
									  </Card>

								
				);
			}).reverse()}
		</div>
	);
};

export default CommentList;