import React from 'react'
import {SecondaryButton} from './button';
import Polaroid from './polaroid';

let follow_btn_props = {
	button_text: 'Follow',
	button_fxn: () => alert('You are now following this user.'),
	button_cls: 'follow-btn'
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

const GalleryPost = (props) => {
    console.log(props)
    return <figure class="polaroid post">
        <Polaroid {...props} />
        <article class="img-details">
            <div class="img-title">
                <h3>{props.img_title}</h3>
                <h4>Posted by {props.usr_name} on {today}</h4>
            </div>
            <p>{props.img_description}</p>
            
            <div class="align-follow-btn">
                <SecondaryButton button_fxn={follow_btn_props.button_fxn} button_text={follow_btn_props.button_text + ' ' + props.usr_name} />
            </div>
        </article>     
    </figure>
}

export default GalleryPost