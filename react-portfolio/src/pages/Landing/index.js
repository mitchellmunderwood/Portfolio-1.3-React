import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader/index";
import MainArticle from "../../components/MainArticle/index";
import Card2 from "../../components/Card2/index";

function Landing() {

    const sampleProject = {
        imageRef: "/party_planner.png",
        type: "Project",
        title: "title",
        date: "12/31/20",
        description: "a short project description",
        repoLink: "www.github.com/mitchellmunderwood",
        liveLink: "www.google.com",
        badges: ["none", "so", "far"],
        color: "blue",
    }

    const samplePost ={
        imageRef: "/parentconnect.png",
        type: "Post",
        title: "title",
        date: "12/31/20",
        description: "a short post description",
        color: 'red',
    }

    return (
        <div>
            <Body>
                <Album>
                    <MainArticle content={sampleProject}/>
                </Album>
                <AlbumHeader title="Posts" subtitle="MORE POSTS" />
                <Album>
                    <Card2 content={samplePost}/>
                    <Card2 content={samplePost}/>
                    <Card2 content={samplePost}/>
                </Album>
                <AlbumHeader title="Projects" subtitle="MORE PROJECTS" />
                <Album>
                    <Card2 content={sampleProject}/>
                    <Card2 content={sampleProject}/>
                    <Card2 content={sampleProject}/>
                </Album>
            </Body>
        </div>
    )
}

export default Landing;