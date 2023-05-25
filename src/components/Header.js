import React, { Fragment } from 'react';
import '../tailwind.css';
import { useState } from 'react';

const Header = (props) => {
  const [title, setTitle] = useState('Tree!');

  return (
    <Fragment>
      <header className="header" >
        <h1>{title}</h1>
      </header>
      {/* <div>
        <img src={icon} alt="icon" />
      </div> */}
    </Fragment>
  );
};

export default Header;
