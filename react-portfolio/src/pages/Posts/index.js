import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader";
import Card3 from "../../components/Card3/index";

function Posts() {

    const samplePost ={
        imageRef: "/parentconnect.png",
        type: "Post",
        title: "title",
        date: "12/31/20",
        description: "a short post description",
        colorClass: 'line-red',
    }


    return (<div>
        <Body>
            <Album>
                <Card3 content={samplePost}/>
                <Card3 content={samplePost}/>
                <Card3 content={samplePost}/>
            </Album>
        </Body>
    </div>
    )
}

export default Posts;