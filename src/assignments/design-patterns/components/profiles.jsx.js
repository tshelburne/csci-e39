import React from 'react'
import ReactDOMServer from 'react-dom/server';

const Profile = (props) => {
	let profileChildren = null

	if(props.children) {
		profileChildren = <div className="profile-children" dangerouslySetInnerHTML={ {__html: props.children} } />
	}

	return <div className="profile">
			<img src={props.profile.pic} alt={props.profile.name} />
			<div className="profile-name">{props.profile.name}</div>
			{profileChildren}
		</div>
}

export const BioProfile = ({profile}) => {

	return <Profile profile={profile}>{profile.bio}</Profile>
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
];

export default Profile