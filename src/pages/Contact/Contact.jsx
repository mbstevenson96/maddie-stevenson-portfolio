import Snowboarding from '../../assets/Snowboarding.jpg'
import styles from './Contact.module.css'


const Contact = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.ContactPhoto} src={Snowboarding} alt="Maddie Snowboarding"/>
        <div className={styles.Info}>
          <h1 className={styles.ContactH1}>Contact Me!</h1>
          <div className={styles.gmailContainer}>
            <p className={styles.ContactP}>Email: mbstevenson96@gmail.com</p>
          </div>
          <div className={styles.githubContainer}>
            <a className={styles.ContactA} href='https://github.com/mbstevenson96'> Click to View GitHub Profile</a>
          </div>
          <div className={styles.linkedinContainer}>
            <a className={styles.ContactA} href='https://www.linkedin.com/in/mstevenson11/'>Click to View Linkedin Profile</a>

        </div>
        </div>
      </div>
    </>
  );
}

export default Contact;