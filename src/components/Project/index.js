import React from "react";
import ProjectCard from "../ProjectCard";
import foodfestival from "../../assets/FoodFestival.png";
import runbuddy from "../../assets/RunBuddy.png";
import swanson from "../../assets/Swanson.png";
import taskinator from "../../assets/Taskinator.png";
import thebword from "../../assets/ThBWord.png";
import weather from "../../assets/Weather.png";
import dino from "../../assets/Dino.png";

export default function Project() {

    const projects = [
        { title: "The B Word", src: thebword, link: "https://limitless-journey-42984.herokuapp.com/"},
        { title: "Food Festival", src: foodfestival, link: "https://rachelgray7448.github.io/food-festival/" },
        { title: "Run Buddy", src: runbuddy, link: "https://rachelgray7448.github.io/run-buddy/" },
        { title: "Swanson Quote Quiz", src: swanson, link: "https://rachelgray7448.github.io/swanson-quote-quiz/" },
        { title: "Weather Dashboard", src: weather, link: "https://rachelgray7448.github.io/weather-dashboard/" },
        { title: "Taskinator", src: taskinator, link: "https://rachelgray7448.github.io/taskinator/" },
        { title: "DDAA", src: dino, link: "https://delusionaldinos.herokuapp.com/"}
    ];

    return (
        <div>
            {projects.map((project, index) => (
                <ProjectCard title={project.title} src={project.src} key={index} />
            ))}
        </div>
    );
}
