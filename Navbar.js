import React from 'react'
import './Navbar.css'






const Navbar =() =>{
    return(
        <div className="navbar">
            <h1>Accelerator</h1>
            <ul>
                
                <li>Home</li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">pages</a>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">BlogTemplates</a>
                </li>
                <li>Install Theme</li>
            </ul>
           
        </div>
    )
}

export default Navbar