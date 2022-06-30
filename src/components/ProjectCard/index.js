import React from "react";


export default function ProjectCard({ title, src }) {


    return (
        <div id="project">
            {title}
            <img className="project-thumbnail" src={src} />
        </div>
    );
}
