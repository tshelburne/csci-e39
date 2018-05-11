import React from 'react'
import ReactDOMServer from 'react-dom/server';

const Profile = (props) => {
	let addChildClasses = (props.addChildClasses ? props.addChildClasses : '');
	let profileChildren = null


	if(props.children) {
		profileChildren = <div className={`profile-children ${addChildClasses}`} dangerouslySetInnerHTML={ {__html: props.children} } />
	}

	return <div className="profile">
			<img src={props.profile.pic} alt={props.profile.name} />
			<div className="profile-name">{props.profile.name}</div>
			{profileChildren}
		</div>
}

export const BioProfile = ({profile, showHideBio}) => {
	if (showHideBio) {
		return <Profile profile={profile}>{profile.bio}</Profile>
	}
	else {
		return <Profile profile={profile} addChildClasses="hideBio">{profile.bio}</Profile>
	}
}

export const ProfilesExamples = [
		{
			id: "one",
			name:"Natalya Shelbourne", 
			pic: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4", 
		},
		{
			id: "bio",
			name:"Natalya Shelbourne", 
			pic: "https://avatars0.githubusercontent.com/u/6720549?s=200&v=4", 
			bio: "Front end developer, designer, illustrator, fine artist, teacher, speaker. <a href=\"http://www.artist-developer.com\">www.artist-developer.com</a>",
		},
		{
			id: "chrisgaines",
			name:"Chris Gaines", 
			pic: "https://a3-images.myspacecdn.com/images03/33/2075aff2d9064cdaab09c71d5c184f54/300x300.jpg", 
			bio: "Heaven knows <br />I\'m head over heels and it shows <br />I\'ve played every field i suppose <br />But there\'s something about you <br />When you\'re around <br />Baby I have found <br />I get lost in you<p><a href=\"https://myspace.com/chrisgainesofficial\">Chris Gaines</a>",
		},
];

export default Profile