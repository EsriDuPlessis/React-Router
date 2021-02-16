import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue lighten-3">
            <div className="container navbar">
               <Link className="brand-logo" to="/">The SandBox</Link> 
                <ul className="right">
                    <Tooltip title="Takes you home">
                    <li><NavLink to="/" >Home</NavLink></li> 
                    </Tooltip>  
                    <Tooltip title="Tell me more">
                    <li><NavLink to="/about">About</NavLink></li>    
                    </Tooltip>
                    <Tooltip title="Reaching us">
                    <li><NavLink to="/contact">Contact</NavLink></li>    
                    </Tooltip>                    
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)