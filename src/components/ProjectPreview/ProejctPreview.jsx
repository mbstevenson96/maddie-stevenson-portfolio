
const ProjectPreview = (props) => {
  return ( 
    <>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <li>
        <h2>{props.title}</h2>
        <button>Learn More About This Project</button>
      </li>
    </>
  );
}

export default ProjectPreview;