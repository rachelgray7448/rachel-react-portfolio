import React from 'react'
import ProjectCard from '../ProjectCard'

export default function Project() {
    const projects = [{title: 'The B Word'}, {title: 'Food Festival'}, {title: 'Run Buddy'}, {title: 'Swanson Quote Quiz'}, {title: 'Weather Dashboard'}, {title: 'Taskinator'}]


  return (
    <div>
        {projects.map((project) => (
            <ProjectCard title={project.title} />
        ))}
    </div>
  )
}
