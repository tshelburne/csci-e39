import React from 'react'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Sun from 'react-icons/lib/ti/weather-sunny'
import Shower from 'react-icons/lib/ti/weather-shower'
import Wind from 'react-icons/lib/ti/weather-windy'
import Night from 'react-icons/lib/ti/weather-night'


class Weather extends React.Component {

  render () {
    return (
      <div>
        <h1>Welcome</h1>
        <SnowFlake/>
        <Sun/>
        <Shower/>
        <Wind/>
        <Night/>
      </div> 
    );
  }

}


export default Weather 
