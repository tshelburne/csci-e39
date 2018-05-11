import React from 'react'
import Profile, {BioProfile} from './profiles.jsx'

const BioProfileList = ({bioProfileList, showHideBio}) => {
	return <div className="bioProfileList">
				<ul className="bioProfileList-ul">
					{bioProfileList.map( (profile) => 
						<li className="bioProfileListitem">
							<BioProfile key={profile.id} profile={profile} showHideBio={showHideBio} />
						</li>
					)}
				</ul>
			</div>
}

export default BioProfileList