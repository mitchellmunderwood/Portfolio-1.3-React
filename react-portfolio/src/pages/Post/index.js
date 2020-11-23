import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import PostCard from "../../components/Post/index";

function Post() {
    const samplePost ={
        imageRef: "/parentconnect.png",
        type: "Post",
        title: "title",
        date: "12/31/20",
        description: "a short post description",
        color: 'red',
    }

    return (<div>
        <Body>
            <Album>
                <PostCard content={samplePost}/>
            </Album>
        </Body>
    </div>
    )
}

export default Post;