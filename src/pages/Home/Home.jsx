import Maddie1 from '../../assets/Maddie1.JPG'
import styles from './Home.module.css'

const Home = () => {
  return ( 
    <>
      <div className={styles.container}>
        <img className={styles.HomePhoto} src={Maddie1} alt="Maddie in garden"/>
        <h1 className={styles.HomeH1}>Maddie Stevenson | Software Engineer</h1>
      </div>
    </>
  );
}

export default Home;