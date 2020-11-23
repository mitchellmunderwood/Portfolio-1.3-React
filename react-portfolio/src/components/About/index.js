import React from "react";
import "./index.css";

function About() {

    return (
        <div className="col-md-12 profile">
            <div className="card mb-1" id="no-hover-shadow">
              <div className="card-img-container">
                  <img className="bd-placeholder-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail">
                  </img>
              </div>
              <div className="card-body">
                      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                          <div className="badges">
                            <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white" alt="" ></img>
                          </div>
                          
                          <button id="to-linkedin" type="button" className="btn btn-primary">Go to LinkedIn</button>
                          <button id="to-github" type="button" className="btn btn-dark">Go to Github</button>
                          <button id="to-resume" type="button" className="btn btn-secondary">Go to Resume</button>

                        <p id="contact-block">Have a position you think I should consider? Just want to get in touch? <br/> 
                          Email me at <a className="contact">mitchellmunderwood@gmail.com</a>. <br/>
                          Call or Message me at <a className="contact">(919) 757-7864</a>.
                        </p>
              </div>
            </div>
        </div>
   
    )
}

export default About;