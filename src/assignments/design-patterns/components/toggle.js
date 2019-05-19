import React from 'react'
import Picture from './picture'
import Button from './button'
import Heading, {HeadingH2, HeadingH3, HeadingH4} from './heading'


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {On: true};
    this.checkClick = this.checkClick.bind(this);
  }

	checkClick() {
		this.setState( 
      function(clickState) {
			 return {On: !clickState.On};
		  }
    );
	}

  render() {
    let button_name;

    if(this.state.On) {
      button_name = 'Hide';
      return (
          <div class="toggle-picture">
            <HeadingH4 title={this.props.title} />
            <Button onClick={this.checkClick} name={button_name} />
            <Picture src={this.props.src} alt={this.props.alt} />
          </div>
      );
    } else {
      button_name = 'Show';
        return (
            <Button onClick={this.checkClick} name={button_name} />
        );
    }
  }
}

export default Toggle;