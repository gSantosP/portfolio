import linkedin from "../img/linkedin.png"
import github from "../img/github.png"
import email from "../img/email.png"



export const Footer = () => {
    return (
      <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top text-dark`}>
        <h3>Contato. {new Date().getFullYear()}</h3>
        <a href="https://www.linkedin.com/in/gabrielsantospereira/">
            <img alt="linkedin" id="linkedin" src={linkedin} ></img>
        </a>

        <a href="https://github.com/gsantosp">
            <img alt="github" id="github" src={github} ></img>
        </a>

        <a href="mailto:gabriel.sp.gsp@gmail.com">
            <img alt="email" id="email" src={email} ></img>
        </a>
      </footer>
    )
  }
