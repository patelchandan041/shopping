import React from 'react'
import './Bg.css'
import {Link} from 'react-router-dom'

function Bg() {
    return (
        <div className="bg">
           
            <div className='bg__text'>
            <h1 className='heading'>Refresh your state of mind</h1>     
            <button><Link to='/product'>Show Now</Link> </button>
             </div>
             <div className="bg__left"></div>
             
        </div>
    )
}

export default Bg
