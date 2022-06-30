import React from "react";
import ProjectCard from "../ProjectCard";
import foodfestival from "../../assets/FoodFestival.png";
import runbuddy from "../../assets/RunBuddy.png";
import swanson from "../../assets/Swanson.png";
import taskinator from "../../assets/Taskinator.png";
import thebword from "../../assets/ThBWord.png";
import weather from "../../assets/Weather.png";

export default function Project() {

    const projects = [
        { title: "The B Word", src: thebword },
        { title: "Food Festival", src: foodfestival },
        { title: "Run Buddy", src: runbuddy },
        { title: "Swanson Quote Quiz", src: swanson },
        { title: "Weather Dashboard", src: weather },
        { title: "Taskinator", src: taskinator },
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <ProjectCard title={project.title} src={project.src} key={index} />
            ))}
        </div>
    );
}
