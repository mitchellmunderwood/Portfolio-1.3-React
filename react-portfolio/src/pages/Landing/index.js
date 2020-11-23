import React, {useEffect} from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader/index";
import MainArticle from "../../components/MainArticle/index";
import Card2 from "../../components/Card2/index";
import {useStoreContext} from "../../store/store";

function Landing() {
    const [state, dispatch] = useStoreContext();

    return (
        <div>
            <Body>
                <Album>
                    {
                       state.projects.slice(0,1).map(main => {
                           return <MainArticle content={main}/>
                       }) 
                    }
                </Album>
                <AlbumHeader title="Posts" subtitle="MORE POSTS" />
                <Album>
                    {state.posts.map(post => {
                       return <Card2 content={post}/>   
                    })}
                </Album>
                <AlbumHeader title="Projects" subtitle="MORE PROJECTS" />
                <Album>
                    {state.projects.slice(1,6).map(project => {
                        return <Card2 content={project}/>   
                    })}
                </Album>
            </Body>
        </div>
    )
}

export default Landing;