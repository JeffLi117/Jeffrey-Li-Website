import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <section className="relative h-full">
      <div className="p-6 bg-purple-100 mt-12 rounded-lg">
        <div className="text-3xl mb-4">
          👋 Hi, I'm Jeffrey.
        </div>
        <p className="mb-4">I'm a full-stack software developer from Texas. I'm currently creating <a href="https://github.com/JeffLi117/Not-In-Vein" className="hover:text-red-200 transition ease-in-out italic">Not In Vein</a>, a centralized web application to remind blood donors when they can give back to others again, as well as aid in searching for nearby donation locations. In my spare time, I enjoy eating all the pizza, reading fantasy novels (especially those with dragons! 🐉), cooking, and rock climbing.</p>
        <p className="mb-4">I'm on <a href="https://github.com/JeffLi117" className="text-blue-400">GitHub</a> and <a href="https://www.linkedin.com/in/jeffrey-li-do/" className="text-blue-400">LinkedIn</a></p>
      </div>
    </section>
    // <div className={`min-h-screen ${isLight ? "md:bg-[url('../public/white-pattern.jpg')]" : "md:bg-[url('../public/dark-pattern.jpg')]"} md:px-28 lg:px-48`}>
    //   <div className={`relative min-h-screen w-full animate-fadeIn pt-[50px] md:p-2 h-[calc(100%-40px)] md:h-[calc(100%-55px)] ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}`}>
    //     <Nav />
    //     <div className="pb-2 h-full grid grid-rows-[65px,minmax(0, 1fr),minmax(0, 1fr),minmax(0, 1fr),minmax(0, 1fr)] md:grid-rows-5 md:flex md:flex-col md:gap-2">
    //       <div className="pt-2 flex items-center justify-center row-start-2 row-end-4 md:hidden">
    //         <Image
    //           src={Headshot_Mononoke_Square}
    //           className="rounded-full"
    //           height={200}
    //           width={200}
    //           alt="Personal headshot"
    //         />
    //       </div>
    //       <div className="hidden pt-2 md:pt-8 md:flex items-center justify-center">
    //         <Image
    //           src={Headshot_Mononoke_Square}
    //           className="rounded-full"
    //           height={300}
    //           width={300}
    //           alt="Personal headshot"
    //         />
    //       </div>
    //       <div className="flex flex-col items-center justify-center">
    //         <div className="text-2xl">JEFFREY LI</div>
    //       </div>
    //       <div className="flex flex-col items-center justify-center p-2">
    //         <TypingEffect />
    //       </div>
    //       <div className="flex flex-col items-start md:items-center text-left justify-center px-10 md:px-20 py-2">
    //         <div>Have questions? Want to collaborate?</div>
    //         <div>Message me about anything!</div>
    //       </div>
    //       <div className="flex flex-col items-center text-left justify-center px-10 md:px-16 lg:px-40 py-2">
    //         <EmailMeForm />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
