import MaddieLamb from '../../assets/MaddieLamb.jpg'
import ResumeIcon from '../../assets/ResumeIcon.png'
import MaddieResume from '../../assets/MadeleineStevensonResume.pdf'
import styles from './Resume.module.css'


const Resume = () => {
  return ( 
    <>
      <main className={styles.container}>
        <img className={styles.ResumePhoto} src={MaddieLamb} alt="Maddie hiking in Ireland"/>
          <object 
            className={styles.ResumeObject}
            type='application/pdf'
            data={MaddieResume}
            height="90%"
            width="80%">
          </object>
          <h1 className={styles.ResumeH1}>Click the icon below to download my resume!</h1>
          <a href='https://drive.google.com/file/d/1xF-7FlAZJMOMGW0i36hAJgGi-23vLk93/view?usp=sharing'>
          <button>
            <img className={styles.ResumeIcon} src={ResumeIcon} alt="resume icon"/>
          </button>
          </a>
      </main>
    </>
  );
}

export default Resume;