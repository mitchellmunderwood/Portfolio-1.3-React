import React from "react";
import "./index.css";

function Post(props) {

    const {imageRef, type, title, date, description, badges, repoLink, liveLink} = props.content;
    

    return (
        <div class="col-md-12 post">
            <div class="card mb-1" id="no-hover-shadow">
                <h1 class="title">{title}</h1>
                <div class="card-img-container">
                    <img class="bd-placeholder-img" src={process.env.PUBLIC_URL + "/images" + imageRef} width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" />
                </div>

                <div class="card-body">
                    <small class="text-muted">{date}</small>
                    <p class="card-text">{description}</p>

                </div>
            </div>
        </div>
    )
}

export default Post;