import React from 'react'

//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <h1>This is the header</h1>
      </div>
    );
  }
  
  export default Header;