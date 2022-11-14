import ProjectPreview from "../ProjectPreview/ProejctPreview";

const ProjectsList = (props) => {
  return ( 
    <>
      <ul>
        {props.projects?.map(project => 
          <li key={project.title}>
            <ProjectPreview title={project.title} image={project.image}/>
          </li>
          )}
      </ul>
    </>
  );
}

export default ProjectsList;