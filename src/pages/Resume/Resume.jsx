import MaddieLamb from '../../assets/MaddieLamb.jpg'
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
      </main>
    </>
  );
}

export default Resume;