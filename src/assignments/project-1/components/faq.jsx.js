import React from 'react'

class Faq extends React.Component {
    
    constructor( props ){
        super( props )
        this.state = { show : false };
        
        this.faqVisible = this.faqVisible.bind(this)
    }
    
    faqVisible  (){
        const { show } = this.state;
        this.setState( { show : !show } )
    }
    
    render() {
        return (
          <div className="FaqContainer">
            <div className="faqHeader">
              <h1>FAQ</h1>
            </div>
            <div className="faqContent">
                <br />
                <button onClick={ this.faqVisible }>FAQ</button>
                <br /><br />
                { this.state.show && <FaqContent /> }
            </div>
          </div>
        );
    }
}

class FaqContent extends React.Component{
    render(){
        return(
            <div className="faqListContainer">
                <p><span className="question">How old is Kobe?</span></p>
                <p>Kobe is 1 years old! He turned 1 April 20, 2018.</p>
                <p><span className="question">What kind of dog is Kobe?</span></p>
                <p>Kobe is Silver Brindle French Bulldog.</p>
                <p><span className="question">Did you get Kobe from a breeder? If so, which breeder?</span></p>
                <p>Kobe is from a breeder in Ohio called Hilltop Acre Frenchie and I highly recommend them!</p>
                <p><span className="question">What food do you recommend</span></p>
                <p>This breed tends to have very sensitive tummies, so food selection is very important. 
                Kobe eats a grain-free, corn free, and soy-free diet. Our dry kibble is from Whole Earth Farms.</p> 
                <p><span className="question">Does Kobe have any social media accounts?</span></p>
                <p>Of course he does, you can follow him on Instagram @__iamkobe</p> 
            </div>
        )
    }
}

export default Faq;