import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import ProjectCard from "../../components/Project/index";

function Project() {

    return (<div>
        <Body>
            <Album>
                <ProjectCard />
            </Album>
        </Body>
    </div>
    )
}

export default Project;