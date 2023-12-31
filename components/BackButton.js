import { IoArrowBackCircleOutline } from "react-icons/io5";
import Link from 'next/link';

function BackButton({ destination }) {
    return (
        <span>
            <Link href={`/${destination}`}>
                <IoArrowBackCircleOutline
                    className="absolute bottom-1 right-2 z-30 text-black text-2xl md:text-3xl hover:scale-[1.15] hover:text-purple-700 transition ease-in-out"
                />
            </Link>
        </span>
      
    );
}

export default BackButton