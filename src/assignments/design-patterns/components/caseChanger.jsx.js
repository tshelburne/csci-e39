import React from 'react'

class CaseChanger extends React.Component {
   constructor() {
      super();
      this.state = { TextHolder : "Some Sample Text" }

      this.toUpper = this.toUpper.bind(this);
      this.toLower = this.toLower.bind(this)
   }

   toUpper () {
      const A = this.state.TextHolder ;
      const B = A.toUpperCase() ;
      this.setState({ TextHolder : B })
   }

   toLower ()  {
      const A = this.state.TextHolder ;
      const B = A.toLowerCase() ;
      this.setState({ TextHolder : B })
   }

   render() {
       return <div>
            <div className="caseButtonContent">
               <p> {this.state.TextHolder} </p>
               <button className="uppercaseButton" onClick={() => this.toUpper({TextHolder : "Some Sample Text"})}>Upper</button>
               <button className="lowercaseButton" onClick={() => this.toLower({TextHolder : "Some Sample Text"})}>Lower</button>
            </div>
         </div>
   }
}

export default CaseChanger
















