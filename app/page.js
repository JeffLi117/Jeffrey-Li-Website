import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import Headshot_Mononoke_Square from "../public/Headshot_Mononoke_Square.jpg";
import { FaLaptopCode } from "react-icons/fa";

export default function Home() {
  
  return (
    <div>
      <div className="h-1/2 p-2 md:grid md:grid-cols-4">
        <div className="flex flex-col gap-2 grid grid-rows-5 col-start-2 col-end-5 p-4">
          <div className="flex items-center justify-center row-start-2 row-end-3">
            <Image
              src={Headshot_Mononoke_Square}
              className="rounded-full"
              height={150}
              width={150}
              alt="Personal headshot"
            />
          </div>
          <div className="flex flex-col items-center justify-center row-start-3 row-end-4">
            <div className="text-2xl font-bold">Jeffrey Li</div>
            <div>Houston, TX</div>
          </div>
          <div className="flex flex-col items-center justify-center p-2 row-start-4 row-end-5">
            <TypingEffect />
          </div>
        </div>
      </div>
    </div>
  )
}
