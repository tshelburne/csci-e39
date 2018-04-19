import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Nav = () => (
  <Router>
    <nav>
      <ul>
      <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      <Route path="/faq" component={Faq} />
    </nav>
  </Router>
);

const Faq = () => (
  <div className = "faq">
    <h2>FAQ</h2>
      <h3> How do you use the uploader?</h3>
      <p>Simply use te upload button to select photos you want to upload</p>
      <h3> Can we contact you with any questions?</h3>
      <p>Yes, you can find contact details at the bottom of the page</p>
      <h3> Is there a limit to how many photos we can upload?</h3>
      <p>Nope, feeel free to be as creative as you wish</p>
  </div>
);


export default Nav