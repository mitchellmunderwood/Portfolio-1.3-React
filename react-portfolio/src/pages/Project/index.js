import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import ProjectCard from "../../components/Project/index";

function Project() {

    const sampleProject = {
        imageRef: "/party_planner.png",
        type: "Project",
        title: "title",
        date: "12/31/20",
        description: "a short project description",
        repoLink: "github.com/mitchellmunderwood",
        liveLink: "google.com",
        badges: [{type: "Code", name: "Javascript"},{type: "Code", name: "React"},{type: "Code", name: "Redux"}],
        color: "blue",
    }

    return (<div>
        <Body>
            <Album>
                <ProjectCard content={sampleProject}/>
            </Album>
        </Body>
    </div>
    )
}

export default Project;