import hyphenateWords from '../../utilities/hyphenateWords'
import { Link } from 'react-router-dom'

const ProjectPreview = (props) => {
  const projectPath = hyphenateWords(props.title)
  return ( 
    <>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <section>
        <h2>{props.title}</h2>
        <Link to={projectPath}>
          <button>Learn More About This Project</button>
        </Link>
      </section>
    </>
  );
}

export default ProjectPreview;