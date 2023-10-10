import { FaGithub } from "react-icons/fa";

function Nav() {

  return (
    <div className="bg-transparent relative" >
      <div id="githubIcon" className="hover:spin z-20">
        <a href="https://github.com/JeffLi117">
          < FaGithub/>
        </a>
      </div>
    </div>
  )
}

export default Nav