import React from 'react'

import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
   
    <>
        <nav>
          <h1>MasyStar</h1>
          <div>
          <HashLink to="/#Home">  Home  </HashLink>
           <HashLink to="/#About">  About  </HashLink>
           <HashLink to="/Contact"> Contact   </HashLink>
           <HashLink to="/#Brands"> Brands   </HashLink>
           <NavLink to="/Services"> Services   </NavLink>
           
          </div>
         
        </nav>
    </>
  )
}

export default Header
