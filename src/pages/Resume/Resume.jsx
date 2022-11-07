import MaddieLamb from '../../assets/MaddieLamb.jpg'
import ResumeIcon from '../../assets/ResumeIcon.jpg'


const Resume = () => {
  return ( 
    <>
      <div>
        <img src={MaddieLamb} alt="Maddie hiking in Ireland"/>
      </div>
      <h1>Click the icon below to view my resume!</h1>
      <a href='https://drive.google.com/file/d/1Nop0vBCSzTG6x-19dIvkNj3SPp_JJ20u/view?usp=sharing' target="_blank" rel="noopener noreferrer">
        <button>
          <img src={ResumeIcon} alt="resume icon"/>
        </button>
      </a>
    </>
  );
}

export default Resume;