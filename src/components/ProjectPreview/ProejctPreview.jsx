
const ProjectPreview = (props) => {
  return ( 
    <>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <section>
        <h2>{props.title}</h2>
        <button>Learn More About This Project</button>
      </section>
    </>
  );
}

export default ProjectPreview;