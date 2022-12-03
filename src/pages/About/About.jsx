import MAndA from '../../assets/MAndA.jpg'
import styles from './About.module.css'

const About = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.AboutPhoto} src={MAndA} alt="Maddie and dog Ace on hike"/>
        <div className={styles.Info}>
          <h1 className={styles.AboutH1}>About Me</h1>
          <p className={styles.AboutP}>Inspired by the creation of Web3 and browser access to the metaverse, my experience with working in this industry has led to my passion for software development. My passion is driven by wanting to build communities where geography isn’t an issue. Bringing others together can create a world where unity is universal.</p>
          <p className={styles.AboutP}>When I am not pursuing my passion of software engineering I am discovering new outdoor adventures, training with my dog Ace, reading, and exploring new travels.</p>

        </div>
      </div>
    </>
  );
}

export default About;