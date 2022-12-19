import Snowboarding from '../../assets/Snowboarding.jpg'
import styles from './Contact.module.css'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'


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
          <div className={styles.contactContainer}>
            <a className={styles.ContactA} href='https://github.com/mbstevenson96'>
            <img src={Github} alt='github icon' className={styles.GithubImg}/>
            </a>
            <a className={styles.ContactA} href='https://www.linkedin.com/in/mstevenson11/'>
            <img src={Linkedin} alt='linkedin icon' className={styles.LinkedinImg}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;