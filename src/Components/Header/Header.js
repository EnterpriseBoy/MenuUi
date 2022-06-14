import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

//Bootstrap
import Button from 'react-bootstrap/Button';


function Header() {
    return (
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <h1>This is the header</h1>
        <button onClick={() => alert("Clicked")}>TEST BUTTON</button>
      </div>
    );
  }
  
  export default Header;