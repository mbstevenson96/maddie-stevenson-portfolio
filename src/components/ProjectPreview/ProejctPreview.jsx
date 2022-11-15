import hyphenateWords from '../../utilities/hyphenateWords'
import { Link } from 'react-router-dom'
import styles from './ProjectPreview.module.css'


const ProjectPreview = (props) => {
  const projectPath = hyphenateWords(props.title)
  return ( 
    <div className={styles.container}>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <section>
        <h2 className={styles.ProjectH1}>{props.title}</h2>
        <Link to={projectPath}>
          <button>Learn More About This Project</button>
        </Link>
      </section>
    </div>
  );
}

export default ProjectPreview;