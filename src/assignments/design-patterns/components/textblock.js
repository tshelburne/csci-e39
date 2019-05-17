import React from 'react';

const TextBlock = ({ children }) => (
  <div className='text-block'>{children}</div>
);

export default TextBlock;

// functional components don't need to import Component?
// if capturing events (on focus, etc), maybe need class components (life-cycle?)
