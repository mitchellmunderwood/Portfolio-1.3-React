import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import PostCard from "../../components/Post/index";

function Post() {

    return (<div>
        <Body>
            <Album>
                <PostCard />
            </Album>
        </Body>
    </div>
    )
}

export default Post;