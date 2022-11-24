import MaddieLamb from '../../assets/MaddieLamb.jpg'
import ResumeIcon from '../../assets/ResumeIcon.png'
import styles from './Resume.module.css'


const Resume = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.ResumePhoto} src={MaddieLamb} alt="Maddie hiking in Ireland"/>
        <h1 className={styles.ResumeH1}>Click the icon below to view my resume!</h1>
        <a href='https://drive.google.com/file/d/1xF-7FlAZJMOMGW0i36hAJgGi-23vLk93/view?usp=sharing' target="_blank" rel="noopener noreferrer">
          <button>
            <img className={styles.ResumeIcon} src={ResumeIcon} alt="resume icon"/>
          </button>
        </a>
      </div>
    </>
  );
}

export default Resume;