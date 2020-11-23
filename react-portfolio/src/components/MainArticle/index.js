import React from "react";
import "./index.css";

export default function MainArticle(props) {

    const {imageRef, type, title, date, description, badges, repoLink, liveLink} = props.content;

    return (
        <div class="col-md-12" id="main-article">
            <div class="card mb-1">

                <div class="card-img-container">
                    <img id="main-article-photo" class="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail">                                                                
                    </img>
                </div>

                <div class="card-body">
                    <h3>{title}</h3>
                    <p class="card-text">{description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small>{type}</small>                                                                        
                        <small class="text-muted">{date}</small>
                    </div>
                </div>

            </div>
        </div>
    )
}
