import React from 'react'
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helper/ProjectList';

function Projects() {
  return (
    <div className='project'>
      <h1>some of my projects</h1>
      <div className='projectList'>
        {ProjectList.map((project) => {
          return <ProjectItem name= {project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects