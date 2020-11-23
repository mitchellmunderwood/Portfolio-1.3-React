import React from "react";
import "./index.css";

export default function AlbumHeader(props) {
        const {title, subtitle} = props
    return (
        <div className="album-header">
            <div className="album-header-body d-flex justify-content-between align-items-center">
                <h3 className="album-header-title">{title}</h3>
                <a className="album-header-more">{subtitle}</a>
            </div> 
        </div>
    )
}

