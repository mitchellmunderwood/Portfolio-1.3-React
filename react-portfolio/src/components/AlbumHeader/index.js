import React from "react";
import "./index.css";

export default function AlbumHeader(props) {
        const {title, subtitle} = props
    return (
        <div class="album-header">
            <div class="album-header-body d-flex justify-content-between align-items-center">
                <h3 class="album-header-title">{title}</h3>
                <a class="album-header-more">{subtitle}</a>
            </div> 
        </div>
    )
}

