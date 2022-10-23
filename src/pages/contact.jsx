import Gmail from '../assets/Gmail.png'
import GitHub from '../assets/GitHub.png'
import Linkedin from '../assets/Linkedin.png'
import ButtonMailto from '../components/ButtonMailTo/ButtonMailTo'


const Contact = () => {
  return ( 
    <>
      <h1>Contact Me!</h1>
      <div>
        <div>
          <img src={Gmail} alt="gmail icon"/>
          <ButtonMailto label="Email!" mailto="mailto:mbstevenson96@gmail.com" />
        </div>
        <div>
          <img src={GitHub} alt="githib icon"/>
          <a href='https://github.com/mbstevenson96' target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
        <div>
          <img src={Linkedin} alt="linkedin icon"/>
          <a href='https://www.linkedin.com/in/mstevenson11/' target="_blank" rel="noopener noreferrer">Linkedin Profile</a>
        </div>
      </div>
    </>
  );
}

export default Contact;