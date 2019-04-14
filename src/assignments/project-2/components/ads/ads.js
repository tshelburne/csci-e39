import React from 'react'
import './ads.scss'
import Ad from '../ad/ad'
import List from '../list/list'

export default class Ads extends React.Component {

  constructor(props) {
    super(props);   
  }

  render() {
    return (
      <List>
        <Ad img={"https://img-9gag-fun.9cache.com/photo/aWZ53yK_700bwp.webp"} text = {"Free Golden Company with loan of 10,000 gold dragons"}/>
        <Ad img={"https://vignette.wikia.nocookie.net/gameofthrones/images/e/ed/Night%27s-Watch-Main-Shield.PNG/revision/latest?cb=20161231113156"} text = {"Need a career change? Want to defend the Realms of Men? Join the Night's Watch!"}/>
      </List>
    );
  }
}
