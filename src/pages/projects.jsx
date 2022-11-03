import projects from '../data/projects.js'

const Projects = () => {

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return ( 
    <>
      <h1>This is the Projects component</h1>
      <div>
        {projects?.map(project => 
          <div key={project.title}>
            <div>{project.image}</div>
            <h2>{project.title}</h2>
            <h3>{project.description}</h3>
            <h3>{project.deploymentLink}</h3>
            <h3>{project.repositoryLink}</h3>
          </div>
          )}
      </div>
    </>
  );
}

export default Projects;