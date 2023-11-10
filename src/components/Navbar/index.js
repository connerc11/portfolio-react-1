
import React, { Component } from 'react'; 

import './style.css'
import { NavLink } from "react-router-dom"

class Nav extends Component {
   
        render(){
        return (
            <nav className="NavBarItem">
                 <h1 className="navLogo">Conner's Development Portfolio <i className="fas fa-hockey-puck"></i>
                 </h1>
                <ul className="nav-menu"> 
            <li><NavLink  activeStyle={{fontWeight: 'bold', color: 'yellow'}}to="/Home">Home</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold', color: 'yellow'}}to="/Portfolio">Portfolio</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold', color: 'yellow'}}to="/Contact">Contact</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold', color: 'yellow'}}to="/About">About</NavLink></li>
            <li><NavLink  activeStyle={{fontWeight: 'bold', color: 'yellow'}}to="/Resume">Resume</NavLink></li>
            </ul>
           
            </nav>
        )
    }

}
 
export default Nav;