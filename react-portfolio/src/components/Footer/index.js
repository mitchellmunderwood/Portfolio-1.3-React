import React from "react";
import "./index.css";
import {Link, NavLink} from "react-router-dom";

function Footer() {

    return (
        <footer>
        <div className="container">
            <div className="row">
              <div className="col-md-7 py-4">
                <h4 className="">Mitchell Underwood</h4>
                <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
              </div>
              <div className="col-md-2 offset-md-1 py-4">
                <h4>Navigation</h4>
                <ul className="list-unstyled">
                  <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/Posts">Posts</Link></li>
                  <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/Projects">Projects</Link></li>
                  <li><Link onClick={()=>{window.scrollTo(0,0)}} to="/About">About</Link></li>
                </ul>
              </div>
              <div className="col-md-2 py-4">
                <h4>Connect</h4>
                <ul className="list-unstyled">
                  <li><a href="https://www.github.com/mitchellmunderwood">Github</a></li>
                  <li><a href="https://www.linkedin.com/in/mitchellmunderwood">LinkedIn</a></li>
                  <li><Link onClick={()=>{window.scrollTo(0,500)}} to="/About">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )

}

export default Footer;