import React from "react";
import "./index.css";

export default function AlbumHeader() {

    return (
        <div class="album-header">
            <div class="album-header-body d-flex justify-content-between align-items-center">
                <h3 class="album-header-title">Posts</h3>
                <a class="album-header-more">MORE POSTS</a>
            </div> 
        </div>
    )
}

