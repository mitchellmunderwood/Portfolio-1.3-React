import React from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import AlbumHeader from "../../components/AlbumHeader/index";
import MainArticle from "../../components/MainArticle/index";
import Card2 from "../../components/Card2/index";

function Landing() {

    return (
        <div>
            <Body>
                <Album>
                    <MainArticle />
                </Album>
                <AlbumHeader />
                <Album>
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </Album>
                <AlbumHeader />
                <Album>
                    <Card2 />
                    <Card2 />
                    <Card2 />
                </Album>
            </Body>
        </div>
    )
}

export default Landing;