import React from 'react'
import { Card } from 'react-bootstrap'

const ProjectCard = ({ project }) => {
  return (
    <Card className='h-100'>
      <Card.Img variant="top" src={project.image} />
      <Card.Body>
        <Card.Title>{project.name}</Card.Title>
        <Card.Text>
          {project.desc}
        </Card.Text>
        <div className='p-2 d-flex justify-content-center '>
          <Card.Link className='text-center' href="#">View site</Card.Link>
          <Card.Link className='text-center' href="#">GitHub</Card.Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
