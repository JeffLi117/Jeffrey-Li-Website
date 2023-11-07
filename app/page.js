import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import Headshot_Mononoke_Square from "../public/Headshot_Mononoke_Square.jpg";

export default function Home() {
  
  return (
    <div className="animate-fadeIn p-2 h-full md:grid md:grid-cols-4">
      <div className="p-0 h-full grid grid-rows-[16%,16%,16%,16%,16%,16%] md:col-start-2 md:col-end-5">
        <div className="flex items-center justify-center row-start-2 row-end-3">
          <Image
            src={Headshot_Mononoke_Square}
            className="rounded-full"
            height={200}
            width={200}
            alt="Personal headshot"
          />
        </div>
        <div className="flex flex-col items-center justify-center row-start-4 row-end-5">
          <div className="text-2xl">JEFFREY LI</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2 row-start-5 row-end-6">
          <TypingEffect />
        </div>
      </div>
    </div>
  )
}
