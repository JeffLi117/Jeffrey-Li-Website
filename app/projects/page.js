import Link from 'next/link';
import BackButton from '@/components/BackButton';

const ProjectInfo = [
    {
        title: "Memora",
        description: "Note-taking app designed for those who need help remembering important information by using built-in reminders.",
        link: "https://memora-jeffli117.vercel.app/",
        ImgSrc: "/Memora_SS.png",
        route: "memora",
    },
    {
        title: "Not In Vein",
        description: "Centralized reminder application for blood donation donors to track their past donations and remind them of upcoming ones via notifications, email, and text.",
        link: "https://github.com/JeffLi117/Not-In-Vein",
        ImgSrc: "/NIV_SS.png",
        route: "notinvein",
    },
    {
        title: "Finding Friends",
        description: `A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!`,
        link: "https://jeffli117.github.io/Finding-Friends/",
        ImgSrc: "/Finding_Friends_SS.png",
        route: "findfriends",
    },
]

function page() {
  
  return (
    <section className="relative h-full pb-12 md:pb-8">
      <BackButton destination="" />
      <div className={`flex flex-col justify-start items-start gap-4 p-2`}>
        <div className="text-3xl text-bold mb-1">Projects</div>
        <div className="mb-4">Things I tinker with.</div>
        {ProjectInfo.map((item, index) => {
          return (
            <div className="pb-2 w-full md:grid md:grid-cols-[60%,35%] md:gap-12" key={index}>
              <div className="flex justify-center items-center pb-4 hover:scale-[1.05] transition ease-in-out">
                <Link href={`/projects/${item.route}`}>
                  <img
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
                <p className="mt-4 mb-2 lg:leading-relaxed">{item.description}</p>
                <Link href={`/projects/${item.route}`}>
                  <button type="button" className={`w-fit p-2 my-2 md:my-4 bg-purple-200 border border-white border-4 hover:bg-white hover:border-purple-400 hover:text-purple-400 transition ease-in-out rounded-full`}>View Details</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default page