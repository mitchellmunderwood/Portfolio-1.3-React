import React from "react";
import "./index.css";

function Card1(props) {

    const {imageRef, title, date, description, badges, repoLink, liveLink} = props;

    return (
        <div class="col-md-10 offset-md-1" id="main-article">
            <div class="card mb-1 post">
                <h1 class="title">{title}</h1>
                <div class="card-img-container">
                    <img class="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" />
                </div>

                <div class="card-body">
                    <small class="text-muted">{date}</small>
                    <p class="card-text">{description}</p>
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