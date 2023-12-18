import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";
import Headshot_Mononoke_Square from "../public/Headshot_Mononoke_Square.jpg";
import EmailMeForm from "@/components/EmailMeForm";

export default function Home() {
  
  return (
    <div className="animate-fadeIn p-2 h-[calc(100%-40px)] md:h-[calc(100%-55px)]">
      <div className="pb-2 h-full grid grid-rows-[65px,minmax(0, 1fr),minmax(0, 1fr),minmax(0, 1fr),minmax(0, 1fr)] md:grid-rows-5 md:flex md:flex-col md:gap-2">
        <div className="pt-2 flex items-center justify-center row-start-2 row-end-4 md:hidden">
          <Image
            src={Headshot_Mononoke_Square}
            className="rounded-full"
            height={200}
            width={200}
            alt="Personal headshot"
          />
        </div>
        <div className="hidden pt-2 md:flex items-center justify-center">
          <Image
            src={Headshot_Mononoke_Square}
            className="rounded-full"
            height={300}
            width={300}
            alt="Personal headshot"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl">JEFFREY LI</div>
        </div>
        <div className="flex flex-col items-center justify-center p-2">
          <TypingEffect />
        </div>
        <div className="flex flex-col items-start md:items-center text-left justify-center px-10 md:px-20 py-2">
          <div>Have questions? Want to collaborate?</div>
          <div>Message me about anything!</div>
        </div>
        <div className="flex flex-col items-center text-left justify-center px-10 md:px-36 lg:px-56 py-2">
          <EmailMeForm />
        </div>
      </div>
    </div>
  )
}
