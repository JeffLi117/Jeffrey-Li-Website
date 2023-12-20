import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from "next/link";

function BackButtonR() {
  return (
    <div className="absolute bottom-[10px] right-[10px] text-2xl">
      <Link href="/resume">
        <IoArrowBackCircleOutline />
      </Link>
    </div>
  )
}

export default BackButtonR