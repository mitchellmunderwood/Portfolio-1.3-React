import React from "react";
import "./index.css";

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
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Projects</a></li>
                  <li><a href="#">About</a></li>
                </ul>
              </div>
              <div className="col-md-2 py-4">
                <h4>Connect</h4>
                <ul className="list-unstyled">
                  <li><a href="#">Github</a></li>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
    </footer>
    )

}

export default Footer;