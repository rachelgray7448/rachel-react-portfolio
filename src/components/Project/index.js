import React from 'react'
import ProjectCard from '../ProjectCard'

export default function Project() {
    const projects = [{title: 'The B Word'}, {title: 'Designs by Debie'}]


  return (
    <div>
        {projects.map((project) => (
            <ProjectCard title={project.title} />
        ))}
    </div>
  )
}
