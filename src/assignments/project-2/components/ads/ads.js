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
        <Ad img={"http://www.fillmurray.com/150/150"} text = {"Free Golden Company with loan of 10,000 gold dragons"}/>
        <Ad img={"http://www.fillmurray.com/150/150"} text = {"Need a career change? Want to defend the Realms of Men? Join the Night's Watch!"}/>
      </List>
    );
  }
}
