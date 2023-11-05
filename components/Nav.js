import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Nav() {

  return (
    <div className="bg-transparent relative" >
      <div id="iconHolders" className="flex justify-center items-center gap-1">
        <div id="githubIcon" className="z-20 p-2 border border-transparent rounded-full">
          <a href="https://github.com/JeffLi117">
            < FaGithub/>
          </a>
        </div>
        <div id="linkedInIcon" className="z-20 p-2 border border-transparent rounded-full">
          <a href="https://www.linkedin.com/in/jeffrey-li-do/">
            < FaLinkedinIn/>
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Nav