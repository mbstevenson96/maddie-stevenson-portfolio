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
      <section className={styles.infoContainer}>
        <h1 className={styles.DetailsH1}>{project.title}</h1>
        <p className={styles.DetailsP}>{project.description}</p>
        <p className={styles.DetailsT}>Technologies Used: {project.technologiesUsed}</p>
        <button className={styles.DetailsButton}>
          <a href={project.repositoryLink} className={styles.DetailsA}>GitHub Repo</a>
        </button>
        <button className={styles.DetailsButton}>
          <a href={project.deploymentLink} className={styles.DetailsA}>Deployed Site</a>
        </button>
      </section>
    </div>
  );
}

export default ProjectDetails;