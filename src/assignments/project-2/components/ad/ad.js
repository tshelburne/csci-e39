import React from 'react'
import './ad.scss'

export default class Ad extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
      const {img, text} = this.props;
    return (
        <div className='ad'>
          <img src={img} />
          <p>{text}</p>
        </div>      
    );
  }
}
