import React from 'react'
import PropTypes from 'prop-types'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import PartSun from 'react-icons/lib/ti/weather-partly-sunny'
import Sun from 'react-icons/lib/ti/weather-sunny'



function Output(props) {
  if (props.temperature < -40 || props.temperature > 122){
    return <p>Really?</p>
  }else if (props.temperature <= 40) {
    return <div>
              <span>brrr...it's cold....</span>
              <SnowFlake />
              <SnowFlake />
              <SnowFlake />
           </div>
  } else if (props.temperature > 40 && props.temperature <= 80){
           return <div>
              <span>awesome...enjoy perfect weather....</span>
              <PartSun />
              <PartSun />
              <PartSun />
           </div>
  } else if (props.temperature > 80){
    return <div>
              <span>meh...so hot....</span>
              <Sun />
              <Sun />
              <Sun />
           </div>
  } 
  return <p></p>
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;

    return (
       <div className="inputTemp">
          <form className="formTemp"> 
            <fieldset>
              <legend>What is the temperature today? (in fahrenheit)</legend>
              <input value={temperature}
                     onChange={this.handleChange} />
                <Output temperature={parseFloat(temperature)} />
            </fieldset>
          </form>
      </div>
    )
  }
}

Output.propTypes = {
  temperature: PropTypes.number,
}

export default TemperatureInput
