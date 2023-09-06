import { FaGithub } from "react-icons/fa";


function Nav() {

  return (
    <div className="bg-orange-200 relative" >
      < FaGithub 
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          color: 'black',
        }}
      />
    </div>
  )
}

export default Nav