import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'

class ProgressBar extends React.Component {

    constructor() {
        super(...arguments);
        autobind(this);
        this.state = {progressValue: 0};
    }

    handleClick() {
        this.setState((state) => {
            return {progressValue: state.progressValue + 20}
        })
    };

    render() {
        let {heading, type} = this.props;
        return <div>
                    <h4>{heading}</h4>
                    <div>
                        <progress className={type} max="100" value={this.state.progressValue}></progress>
                    </div>
                    <button onClick={this.handleClick}>Increase Progress</button>
               </div>
    }
}

ProgressBar.propTypes = {
    heading: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default ProgressBar