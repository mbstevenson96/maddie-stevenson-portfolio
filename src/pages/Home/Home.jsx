import Maddie1 from '../../assets/Maddie1.JPG'
import styles from './Home.module.css'
import {
  ReactIcon,
  JavascriptIcon,
} from '../../assets/exports.js'

const Home = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.HomePhoto} src={Maddie1} alt="Maddie in garden"/>
        <div className={styles.Info}>
          <h1 className={styles.HomeH1}>Maddie Stevenson | Software Engineer</h1>
          <p className={styles.HomeH1}>Inspired by the creation of Web3 and browser access to the metaverse, my experience with working in this industry has led to my passion for software development. My passion is driven by wanting to build  communities where geography isn’t an issue. Bringing others together can create a world where unity is universal.</p>
          <p className={styles.HomeH1}>When I am not pursuing my passion of software engineering I am discovering new outdoor adventures, training with my dog Ace, reading, and exploring new travels.</p>
        </div>
        <div>
          <h1 className={styles.HomeH1}>Tech Stack</h1>
          <img src={ReactIcon.src} alt={ReactIcon.alt} />
          <img src={JavascriptIcon.src} alt={JavascriptIcon.alt} />
        </div>
      </div>
    </>
  );
}

export default Home;