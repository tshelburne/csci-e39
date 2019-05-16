import React from 'react'
import PropTypes from 'prop-types'
// import ReactDOM from 'react-dom'

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0
    }
  }

  goToSlide(index){
    this.setState({activeIndex: index})
  }

  goToPreviousSlide(e){
    e.preventDefault()
    let index = this.state.activeIndex
    let slides = this.props
    let slidesLength = slides.length

    if (index < 1) {
      index = slidesLength
    }
    --index

    this.setState({activeIndex: index})
  }
  goToNextSlide(e){
    e.preventDefault()
    let index = this.state.activeIndex
    let slides = this.props
    let slidesLength = slides.length -1

    if (index === slidesLength) {
      index = -1
    }
    ++index

    this.setState({activeIndex: index})
  }

  render() {
    return (
      <div className="carousel">
        <a href="#" className="carousel-arrow carousel-arrow-left" onClick={e => this.goToPreviousSlide(e)}>
        <span className="fa fa-2x fa-angle-left"/>
        </a>

        <ul className="carousel-slides">
        {this.props.slides.map((slide, index) =>
          <li className={index==this.state.activeIndex ? "carousel-slide carousel-slide-active" : "carousel-slide"}
          key={index} >
          <p className = "carousel-slide-content">{slide.content}</p>
          <p> <strong className="carousel-slide-author"> {slide.author}</strong>, {" "}
          <small className="carousel-slide-source"> {slide.source} </small>
          </p>
          </li>
        )}
        </ul>

        <a href="#" className="carousel-arrow carousel-arrow-right" onClick={e => this.goToNextSlide(e)}>
        <span className="fa fa-2x fa-angle-right"/>
        </a>

        <ul className="carousel-indicators">
          {this.props.slides.map((slide, index) =>
            <li key={index}>
              <a className={index == this.state.activeIndex ? "carousel-indicator carousel-indicator-active" : "carousel-indicator"}
              onClick={e => this.goToSlide(index)} />
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Carousel

// render(<Carousel slides={slideData}/>, carouselContainer);
