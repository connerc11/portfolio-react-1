import React from "react";
import resume from "../../assets/files/general-resume.pdf"


 function Resume () {
    return (
<div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">My Resume</h1>
    <h3 className="display-8">Coding Talents</h3>
    <hr className="my-4 text-center"></hr>
    <p className="lead">Full Stack Web Development</p>
    <p className="lead">Java, Selenium, HTML, CSS, Javascript, Handlebars</p>
    <p className="lead">NoSQL, MySQL, MongoDB</p>
    <p className="lead">React with JSX</p>
    <p className="lead">Unit testing and Mock Testing</p>
    <a href={resume}> Download PDF </a>
  </div>
</div>
        
       
    )
}
 // <section className="myresume" id="myresume">
        //     <h1> My Resume</h1>
        // <ul>
        //     <h3>Coding Talents</h3>
        //     <li>Fron and Back end Web Development</li>
        //     <li>HTML, CSS, Javascript</li>
        //     <li>NoSQL, SQL, MongoDB</li>
        //     <li>React</li>

        //     <a href={resume}> Download PDF </a>
        // </ul>


        // </section>
export default Resume;