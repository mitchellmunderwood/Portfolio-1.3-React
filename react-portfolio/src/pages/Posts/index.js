import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader";
import Card3 from "../../components/Card3/index";
import {useStoreContext} from "../../store/store";

function Posts() {
    const [state, dispatch] = useStoreContext();

    return (<div>
        <Body>
            <Album>
            {state.posts.map(post => {
                    return <Card3 content={post}/>
                })}
            </Album>
        </Body>
    </div>
    )
}

export default Posts;