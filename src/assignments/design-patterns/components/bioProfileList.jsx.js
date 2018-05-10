import React from 'react'
import Profile, {BioProfile} from './profiles.jsx'

const BioProfileList = ({bioProfileList}) => {
	return <div className="bioProfileList">
				<ul className="bioProfileList-ul">
					{bioProfileList.map( (profile) => 
						<li className="bioProfileListitem">
							<BioProfile key={profile.id} profile={profile} />
						</li>
					)}
				</ul>
			</div>
}

export default BioProfileList