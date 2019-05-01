
import React from 'react'


const items = [#1 Paris, #2 Yellowstone, #3 Rome, #4 Tahiti, #5 London, #6 New Zealnad, #7 Phuket, #8 Grand Canyon, #9 Dubai, #10 New York City];
const listItems = items.map((items) =>
  <li>{items}</li>
);


ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('list')
);
export default ListItems