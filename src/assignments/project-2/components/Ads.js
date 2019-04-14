import React from 'react'
import Section from './Section'

function Ads({ adsList }) {
    return (<aside className='chat-adspace'>
        <h2>Ads for you</h2>
      <ul className="ads-list">
        {adsList.map(({ id, img, text }) =>
        <li key={id} >
            <img className="ad-img" src={img} alt={text}/>
            <a  className="ad-link" href="javascript:void(0)" >Go To Add!</a>
        </li>
        )}
      </ul>
  </aside>)
}

export default Ads