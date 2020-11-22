import React from "react";
import "./index.css";

function Card3() {

    return (
        <div class="col-md-4">
            <div class="card mb-1 mr-1">
                <div class="card-body">
                    <div class="card-line"></div>
                    <div class="d-flex justify-content-between align-items-center">
                            <h3>Title</h3>
                            <small class="text-muted">11/12/20</small>                                                               
                    </div>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-img-container">
                    <img class="" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png" width="100%" height="150px"  role="img" aria-label="Placeholder: Thumbnail">
                    </img>
                </div>
            </div>
        </div>
    )

}

export default Card3;