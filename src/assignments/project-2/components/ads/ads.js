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
          <img src="https://ksr-ugc.imgix.net/assets/011/553/999/11a3a919e024436e7281b1b157b5643a_original.JPG?ixlib=rb-1.1.0&crop=faces&w=1552&h=873&fit=crop&v=1463684383&auto=format&frame=1&q=92&s=79906dcf22366ae5e03c10c3a8b4daa0" />
          <p>Free Golden Company with loan of 10,000 gold dragons</p>
        </div>
        <div className='ad'>
          <img src="https://vignette.wikia.nocookie.net/gameofthrones/images/e/ed/Night%27s-Watch-Main-Shield.PNG/revision/latest?cb=20161231113156" />
          <p>Need a career change? Want to defend the Realms of Men? Join the Night's Watch!</p>
        </div>        
      </div>
    );
  }
}
