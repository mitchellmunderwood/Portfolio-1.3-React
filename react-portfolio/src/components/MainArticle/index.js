import React from "react";
import "./index.css";

export default function MainArticle() {

    return (
        <div class="col-md-12" id="main-article">
            <div class="card mb-1">

                <div class="card-img-container">
                    <img id="main-article-photo" class="bd-placeholder-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail">                                                                
                    </img>
                </div>

                <div class="card-body">
                    <h3>Title</h3>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small>Project</small>                                                                        
                        <small class="text-muted">11/12/20</small>
                    </div>
                </div>

            </div>
        </div>
    )
}
