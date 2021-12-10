import React from "react";
import PDF from "./general-resume.pdf";
import './style.css'

function Footer() {
    return (
        <footer className="Footer">
<ul className="icon-styles">
<li className="icon">

<a href="https://www.linkedin.com/in/conner-c-cochrane/" alt="linkedn"> <i className="fab fa-linkedin-in"></i></a> 
</li>
<li className="icon">

<a href="https://github.com/connerc11" alt="github"> <i className="fab fa-github"></i></a>
</li>
<li className="icon">

<a href={PDF} alt="resume"> <i className="far fa-file"></i></a>
</li>
</ul>
        
        
        
        </footer>
    )
}

export default Footer;