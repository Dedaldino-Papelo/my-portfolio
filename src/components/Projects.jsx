import React from 'react'
import projects from '../projects'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="project-box" id="project">
        <h2 className='text-center'>Projects</h2>
      <div className='box-projects mt-4 d-flex flex-wrap'>
        <Row className='d-flex justify-content-center'>
          {projects.map(project => {
            return (
              <Col sm={12} md={4} lg={4} xl={3}>
                <ProjectCard project={project} />
            </Col>
            )
          })}
        </Row>
      </div>
    </div>
  )
}

export default Projects
