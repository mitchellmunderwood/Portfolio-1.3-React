import React from "react";
import "./index.css";

function Card1() {

    return (
        <div class="col-md-10 offset-md-1" id="main-article">
            <div class="card mb-1 post">
                <h1 class="title">Parent Connect</h1>
                <div class="card-img-container">
                    <img class="bd-placeholder-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Baklava%281%29.png" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" />
                </div>

                <div class="card-body">
                    <small class="text-muted">11/12/20</small>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="badges">
                        <img src="https://img.shields.io/badge/Code-JavaScript-informational?style=flat&logo=javascript&logoColor=white&color=white" alt="" />
                    </div>                                            
                    <button type="button" class="btn btn-primary">Go to Live</button>
                    <button type="button" class="btn btn-secondary">Go to Repo</button>
                </div>
            </div>
        </div>
    )

}

export default Card1;