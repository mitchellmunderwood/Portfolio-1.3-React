import React from "react";
import "./index.css";

function Album(props) {

    return (
        <div class=" album pb-5">
            <div class="row">
                {props.children}
            </div>
        </div>
    )

}

export default Album;