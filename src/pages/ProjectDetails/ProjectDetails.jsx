import findProject from '../../utilities/findProject'
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <>
      <img 
        src={project.image} 
        alt={project.title}
      />
      <section>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.repositoryLink} target='_blank' rel='noreferrer'>GitHub Repo</a>
        <a href={project.deploymentLink} target='_blank' rel='noreferrer'>Deployed Site</a>
      </section>
    </>
  );
}

export default ProjectDetails;