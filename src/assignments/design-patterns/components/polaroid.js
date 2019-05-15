import React from 'react'
import Button from './button';

let share_btn_props = {
	button_text: 'Share',
	button_fxn: () => alert('Opens Share Dialogue'),
	button_cls: false
}

let like_btn_props = {
	button_text: 'Like',
	button_fxn: () => alert('Liked!'),
	button_cls: false
}

const Polaroid = (props) => {
    return <figure class="polaroid">
        <img src={props.img_url} alt={props.img_description} />
        <div class="interact-buttons">
            <Button button_fxn={like_btn_props.button_fxn} button_text={like_btn_props.button_text} />
            <Button button_fxn={share_btn_props.button_fxn} button_text={share_btn_props.button_text} />
        </div>                
        
    </figure>
}

export default Polaroid