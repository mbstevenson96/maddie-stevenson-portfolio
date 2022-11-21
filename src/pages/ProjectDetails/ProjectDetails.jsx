import findProject from '../../utilities/findProject'
import { useParams } from "react-router-dom";
import styles from './ProjectDetails.module.css'

const ProjectDetails = () => {
  const { projectDetails } = useParams()
  const project = findProject(projectDetails)

  return (
    <div className={styles.container}>
      <img className={styles.DetailsImg}
        src={project.image} 
        alt={project.title}
      />
      <section>
        <h1 className={styles.DetailsH1}>{project.title}</h1>
        <p className={styles.DetailsP}>{project.description}</p>
        <p className={styles.DetailsT}>Technologies Used: {project.technologiesUsed}</p>
        <div className={styles.GithubContainer}>
          <a href={project.repositoryLink} target='_blank' rel='noreferrer'>Click for GitHub Repo</a>
        </div>
        <div className={styles.DeployedContainer}>
          <a href={project.deploymentLink} target='_blank' rel='noreferrer'> Click for Deployed Site</a>
        </div>
      </section>
    </div>
  );
}

export default ProjectDetails;