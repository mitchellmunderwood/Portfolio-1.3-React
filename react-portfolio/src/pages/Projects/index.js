import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import Card3 from "../../components/Card3/index";

function Projects() {

    return (<div>
        <Body>
            <Album>
                <Card3 />
                <Card3 />
                <Card3 />
            </Album>
        </Body>
    </div>
    )
}

export default Projects;