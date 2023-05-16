import Link from "next/link";

function Nav() {
  return (
    <div className="absolute top-2 flex justify-left items-center gap-4" >
        <Link href='/' >
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100">Home</div>
        </Link>
        <Link href='/about' >
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100">About</div>
        </Link>
        <Link href='/resume' >
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100">Resume</div>
        </Link>
        <Link href='/portfolio' >
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100">Portfolio</div>
        </Link>
        <Link href='/contact' >
            <div className="opacity-75 transition-all ease-in duration-150 hover:opacity-100">Contact</div>
        </Link>
    </div>
  )
}

export default Nav