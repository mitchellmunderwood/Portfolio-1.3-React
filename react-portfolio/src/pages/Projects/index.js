import React, {useEffect} from "react";
import "./index.css";
import Body from "../../components/Body/index";
import Album from "../../components/Album/index";
import Card3 from "../../components/Card3/index";
import {useStoreContext} from "../../store/store";

function Projects() {
    const [state, dispatch] = useStoreContext();

    return (<div>
        <Body>
            <Album>
                {state.projects.map(project => {
                    return <Card3 content={project}/>
                })}
            </Album>
        </Body>
    </div>
    )
}

export default Projects;