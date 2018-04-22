import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'class-autobind';

import CommentList from '../../ui/components/commentList.jsx';
import AdBlock from '../../ui/components/adBlock.jsx';

import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton';



import Drawer from 'material-ui/Drawer';
import { Tabs, Tab } from 'material-ui/Tabs';

import TextField from 'material-ui/TextField';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

import ActionDone from 'material-ui/svg-icons/action/done';
import CommunicationComment from 'material-ui/svg-icons/communication/comment';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContentMail from 'material-ui/svg-icons/content/mail';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder'

import Dialog from 'material-ui/Dialog';

import Checkbox from 'material-ui/Checkbox';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Chat extends React.Component {
	constructor() {
		super(...arguments);
		autobind(this);
		this.state = { currentText: ``, drawerOpen: false, dialogOpen: false, hasUpload: false };
	}

	handleDrawerClose() {
		this.setState({ drawerOpen: false });
	}

	handleDialogOpen() {
		this.setState({ dialogOpen: true });
	}

	handleUpload() {
		this.setState({ hasUpload: true });
	}

	handleCompleteReview() {
		this.setState({ hasUpload: false });
	}

	handleDialogClose() {
		this.setState({ dialogOpen: false });
	}

	handleDrawerToggle() {
		this.setState({ drawerOpen: !this.state.drawerOpen });
	}

	onType(e) {
		const { chat } = this.props.actions;
		const { currentText: prevText } = this.state;
		const currentText = e.target.value;

		if (!currentText.length) chat.stopTyping();
		if (currentText.length === 1 && !prevText.length) chat.startTyping();

		this.setState({ currentText });
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return;

		const { chat } = this.props.actions;
		const { currentText, hasUpload } = this.state;
		if (!currentText.length) return;

		chat.send(currentText);
		this.setState({ currentText: `` });
	}

	getTypingMessage() {
		const { typing } = this.props.chat;

		switch (typing.length) {
			case 0:
				return null;
			case 1:
				return `${typing[0].name} is typing...`;
			case 2:
				return `${typing[0].name} and ${typing[1].name} are typing...`;
			case 3:
				return `${typing[0].name}, ${typing[1].name}, and ${typing[2].name} are typing...`;
			// len > 3
			default:
				return `${typing.length} members are typing...`;
		}
	}

	render() {
		const { classroom, chat, actions } = this.props;
		const { currentText, hasUpload } = this.state;

		const ad1 = {src: "https://memegenerator.net/img/instances/36926483/y-u-no-use-hipchat.jpg"};
		const ad2 = {src: "http://www.adweek.com/files/imagecache/node-detail/slack-1.jpeg"};

		const dialogActions = [
	      <FlatButton
	        label="Cancel"
	        primary={true}
	        onClick={this.handleDialogClose}
	      />,
	      <RaisedButton
	        label="Send Invites"
	        primary={true}
	        onClick={this.handleDialogClose}
	      />,
	    ];


		return <div className="hg">

		<Dialog
          title="Add Contributors"
          actions={dialogActions}
          modal={false}
          open={this.state.dialogOpen}
          onRequestClose={this.handleClose}
        >
         <List>
    <ListItem
      disabled={true}
      leftCheckbox={<Checkbox />}
      rightAvatar={
        <Avatar src="http://www.material-ui.com/images/adellecharles-128.jpg" />
      }
    >
      First Last Name
    </ListItem>
    <ListItem
      disabled={true}
      leftCheckbox={<Checkbox />}
      rightAvatar={
        <Avatar src="http://www.material-ui.com/images/adhamdannaway-128.jpg" />
      }
    >
      First Last Name
    </ListItem>
    <ListItem
      disabled={true}
      leftCheckbox={<Checkbox />}
      rightAvatar={
        <Avatar src="http://www.material-ui.com/images/allisongrayce-128.jpg" />
      }
    >
      First Last Name
    </ListItem>
    <ListItem
      disabled={true}
      leftCheckbox={<Checkbox />}
      rightAvatar={
        <Avatar src="http://www.material-ui.com/images/chexee-128.jpg" />
      }
    >
      First Last Name
    </ListItem>
  </List>
        </Dialog>

		 <header className="hg__header">
			<AppBar 
				title="PhotoPR" 
				 iconElementLeft={<IconButton touch={true}><CommunicationComment /></IconButton>}
				 onLeftIconButtonClick={this.handleDrawerToggle}
				 iconElementRight={<div>{this.state.hasUpload && <div>
				 		<RaisedButton 
				 			label="Complete Review" 
				 			secondary={true} style={{ marginTop: "5px"}}  labelStyle={{color: "rgb(255, 82, 82)"}}
				 			onClick={this.handleCompleteReview}/>
				 		</div>}</div>}/>
		 </header>
  <main className="hg__main">

      {this.state.hasUpload &&
 	<Card>

 	<CardMedia
	     overlay={<CardTitle title="Image Title" subtitle="Uploaded by First Last Name" /> }>
	     <img src="https://images.unsplash.com/photo-1493838952631-2bce5dad8e54?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2c657455b24166fe47c308fc1d64866c&auto=format&fit=crop&w=1500&q=80"/>
	    </CardMedia>

	
	    </Card>
}

{!this.state.hasUpload && 
		<RaisedButton
			style={{marginLeft: "350px"}}
	        label="Upload Image"
	        primary={true}
	        onClick={this.handleUpload}/>
}
  </main>
  {this.state.hasUpload && 
  <aside className="hg__right">
	<AdBlock ad={ad2}></AdBlock>
<Tabs>
<Tab label="Comments" style={{background: "#fff", color: "#000"}}>


<Card style={{margin: "20px"}}>
	<CardText>
		<TextField
	      hintText="Enter text to add a comment..."
	      value={currentText}
	      multiLine={true}
	      onChange={this.onType}
	      style={{width:"100%", marginTop: "0"}}
	      rows={2}
	      rowsMax={4}/>
	</CardText>
		<CardActions>
			<FlatButton
		        label="Add Comment"
		        primary={true}
		        disabled={currentText === ``}
		        onClick={this.onSend}/>
		</CardActions>
</Card>

<div style={{margin: "20px"}}>
<AdBlock ad={ad1}></AdBlock>
</div>

<CommentList chat={chat}></CommentList>
							{chat.messages.map(({id, student, text, createdAt}) =>

							</Tab>
							<Tab label="Contributors" style={{ background: '#fff', color: '#000' }}>
								{classroom.students.map(({ id, name }) => (
									<Card style={{ margin: '20px' }} key={id}>
										<CardHeader
											title={name}
											avatar="http://www.material-ui.com/images/jsa-128.jpg"
										/>
									</Card>

								)}
							</Tab>
							</Tabs>
				<FloatingActionButton onClick={this.handleDialogOpen} style={{position: "absolute", right: "30px", bottom: "20px"}}>
							      <ContentMail />
							    </FloatingActionButton>

  </aside>
}
		</div>
	}
}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
});

Chat.propTypes = {
	classroom: PropTypes.shape({
		students: PropTypes.arrayOf(studentPropType).isRequired,
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				text: PropTypes.string.isRequired,
				student: studentPropType,
				createdAt: PropTypes.instanceOf(Date).isRequired,
			})
		).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired,
	}),
	actions: PropTypes.object.isRequired,
};

export default Chat;