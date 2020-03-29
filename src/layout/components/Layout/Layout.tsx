import React, { ReactChild } from 'react';

import './index.css';

export default ({ children }: { children: ReactChild }) => (
  <div className="layout_container">
    <img src={require('./header.png')} />
    {children}
    <img src={require('./footer.png')} />
  </div>
);
