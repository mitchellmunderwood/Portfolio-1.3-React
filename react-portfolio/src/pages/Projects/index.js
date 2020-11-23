import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import Card3 from "../../components/Card3/index";

function Projects() {

    const sampleProject = {
        imageRef: "/party_planner.png",
        type: "Project",
        title: "title",
        date: "12/31/20",
        description: "a short project description",
        repoLink: "www.github.com/mitchellmunderwood",
        liveLink: "www.google.com",
        badges: ["none", "so", "far"],
        colorClass: "line-gray",
    }


    return (<div>
        <Body>
            <Album>
                <Card3 content={sampleProject}/>
                <Card3 content={sampleProject}/>
                <Card3 content={sampleProject}/>
            </Album>
        </Body>
    </div>
    )
}

export default Projects;