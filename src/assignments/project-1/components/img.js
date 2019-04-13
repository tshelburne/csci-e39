import React from 'react' 

 const Img = ({ className, small, large, alt, style}) => (
	<picture className={className}>
		<source media="(max-width: 767px)" srcSet={small} />
		<source media="(min-width: 768px)" srcSet={large} />
		<img src={large} alt={alt} style={style} /> 
	</picture>
);
/*class Img extends React.Component {


render() {
    const {upload, ...inputProps} = this.props
    return <input {...inputProps} multiple type="file" onChange={this.handleFiles} />
}

}

Uploader.propTypes = {
upload: PropTypes.func.isRequired,
}
*/

export default Img