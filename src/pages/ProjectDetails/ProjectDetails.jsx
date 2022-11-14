import projects from "../../data/projects";

const ProjectDetails = () => {
  return (
    <>
      <img 
        src={projects[0].image} 
        alt={projects[0].title}
      />
      <section>
        <h1>{projects[0].title}</h1>
        <p>{projects[0].description}</p>
        <a href={projects[0].repositoryLink} target='_blank' rel='noreferrer'>GitHub Repo</a>
        <a href={projects[0].deploymentLink} target='_blank' rel='noreferrer'>Deployed Site</a>
      </section>
    </>
  );
}

export default ProjectDetails;