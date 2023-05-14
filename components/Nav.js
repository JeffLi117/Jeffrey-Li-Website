import Link from "next/link";

function Nav() {
  return (
    <div className="sticky top-0 flex justify-left items-center gap-4 mb-7" >
        <Link href='/' >
            Home
        </Link>
        <Link href='/about' >
            About
        </Link>
        <Link href='/resume' >
            Resume
        </Link>
        <Link href='/portfolio' >
            Portfolio
        </Link>
    </div>
  )
}

export default Nav