import React from 'react'
import projects from '../projects'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        <Row>
          {projects.map(project => {
            return (
              <Col sm={12} md={6} lg={4} xl={3}>
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
