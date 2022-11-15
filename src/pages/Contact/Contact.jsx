import Snowboarding from '../../assets/Snowboarding.jpg'
import ButtonMailto from '../../components/ButtonMailTo/ButtonMailTo'
import styles from './Contact.module.css'


const Contact = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.ContactPhoto} src={Snowboarding} alt="Maddie Snowboarding"/>
        <h1 className={styles.ContactH1}>Contact Me!</h1>
        <div className={styles.gmailContainer}>
          <ButtonMailto label="Click to Send Email" mailto="mailto:mbstevenson96@gmail.com" />
        </div>
        <div className={styles.githubContainer}>
          <a href='https://github.com/mbstevenson96' target="_blank" rel="noopener noreferrer"> Click to View GitHub Profile</a>
        </div>
        <div className={styles.linkedinContainer}>
          <a href='https://www.linkedin.com/in/mstevenson11/' target="_blank" rel="noopener noreferrer">Click to View Linkedin Profile</a>
        </div>
      </div>
    </>
  );
}

export default Contact;