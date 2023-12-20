import Image from 'next/image';
import Link from 'next/link';
import Finding_Friends_SS from "../../public/Finding_Friends_SS.png";
import Memora_SS from "../../public/Memora_SS.png";
import NIV_SS from "../../public/NIV_SS.png";

const ProjectInfo = [
    {
        title: "Memora",
        description: "Note-taking app designed for those who need help remembering important information by using built-in reminders.",
        link: "https://memora-jeffli117.vercel.app/",
        ImgSrc: Memora_SS,
        route: "memora",
    },
    {
        title: "Not In Vein",
        description: "Centralized reminder application for blood donation donors to track their past donations and remind them of upcoming ones via notifications, email, and text.",
        link: "https://github.com/JeffLi117/Not-In-Vein",
        ImgSrc: NIV_SS,
        route: "notinvein",
    },
    {
        title: "Finding Friends",
        description: `A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!`,
        link: "https://jeffli117.github.io/Finding-Friends/",
        ImgSrc: Finding_Friends_SS,
        route: "findfriends",
    },
]

function page() {
  
  return (
    <section className="relative h-full pb-8">
      <div className={`flex flex-col justify-start items-start gap-4 p-2`}>
        <div className="text-3xl text-bold mb-1">Projects</div>
        <div className="mb-4">Things I tinker with.</div>
        {ProjectInfo.map((item, index) => {
          return (
            <div className="pb-2 w-full md:grid md:grid-cols-[60%,35%] md:gap-12" key={index}>
              <div className="flex justify-center items-center pb-4 hover:scale-[1.05]">
                <Link href={`/projects/${item.route}`}>
                  <Image
                      src={item.ImgSrc}
                      className="rounded-lg shadow-lg shadow-slate-500"
                      height="100%"
                      width="100%"
                      alt="project item image"
                  />
                </Link>
              </div>
              <div>
                <h2 className="text-2xl text-left text-bold pt-2">{item.title}</h2>
                <p className="mt-4 mb-2">{item.description}</p>
                <Link href={`/projects/${item.route}`}>
                  <button type="button" className={`w-fit p-2 my-2 md:my-4 bg-purple-200 border border-white border-4 hover:bg-white hover:border-purple-400 hover:text-purple-400 transition ease-in-out rounded-full`}>View Details</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
    // <div className={`min-h-screen ${isLight ? "md:bg-[url('../public/white-pattern.jpg')]" : "md:bg-[url('../public/dark-pattern.jpg')]"} md:px-28 lg:px-48`}>
    //   <div className={`relative min-h-screen w-full animate-fadeIn h-[calc(100%-40px)] md:h-[calc(100%-55px)] pt-[50px] md:p-2 animate-fadeIn flex flex-col justify-start items-start gap-4 p-2 lg:px-20 lg:pb-2 ${isLight ? "bg-white text-cyan-900" : "bg-cyan-900 text-white"}`}>
    //     <Nav />
    //     <div className="text-3xl text-slate-400 flex text-center text-bold px-8 pb-4 md:pt-12">PROJECTS</div>
    //     {ProjectInfo.map((item, index) => {
    //       return (
    //           <div className="pb-2 w-full px-8" key={index}>
    //               <a href={`${item.link}`}>
    //                   <div className="flex justify-center items-center">
    //                       <Image
    //                           src={item.ImgSrc}
    //                           className="rounded-lg shadow-lg shadow-slate-500"
    //                           height="100%"
    //                           width="100%"
    //                           alt="project item image"
    //                       />
    //                   </div>
    //                   <h2 className="text-2xl text-left text-bold pt-2">{item.title}</h2>
    //                   <p>{item.description}</p>
    //               </a>
    //           </div>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}

export default page