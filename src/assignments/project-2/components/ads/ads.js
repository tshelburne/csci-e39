import React from 'react'
import './ads.scss'

export default class Ads extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <div className='ads'>
        <div className='ad'>
          <img src="http://www.fillmurray.com/150/150" />
          <p>Free Golden Company with loan of 10,000 gold dragons</p>
        </div>
        <div className='ad'>
          <img src="http://www.fillmurray.com/150/150" />
          <p>Need a career change? Want to defend the Realms of Men? Join the Night's Watch!</p>
        </div>        
      </div>
    );
  }
}
