import React from 'react'
import './Header1.css'
import {Link} from 'react-router-dom'

function Header1() {
    return (
        <div className="header">
            <nav >
                <div className='header1'>
              <p5>LOG IN</p5>
              <p5>CREATE ACCOUNT</p5>
              </div>
            </nav>
            <div className="header2">
         <p>dede.</p>
         <nav1>
             <p>HOME</p>
             <p>CONTACT US</p>
             <p><Link to='/cart'>CART</Link></p>
             </nav1>
           </div>
             </div>
    )
}

export default Header1
