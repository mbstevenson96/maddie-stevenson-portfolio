import hyphenateWords from '../../utilities/hyphenateWords'
import { Link } from 'react-router-dom'
import styles from './ProjectPreview.module.css'


const ProjectPreview = (props) => {
  const projectPath = hyphenateWords(props.title)
  return ( 
    <div className={styles.container}>
      <img className={styles.ProjectImg}
        src={props.image} 
        alt={props.title}
      />
      <section className={styles.infoContainer}>
        <h2 className={styles.ProjectH1}>{props.title}</h2>
        <Link to={projectPath}>
          <button className={styles.ProjectButton}>Learn More About This Project</button>
        </Link>
      </section>
    </div>
  );
}

export default ProjectPreview;