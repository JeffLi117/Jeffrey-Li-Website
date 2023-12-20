import Image from "next/image";
import Link from "next/link";
import OptiChroniX_SS from "../../public/OptiChroniX_SS.png";
import HUP_SS from "../../public/HUP_SS.png";
import OCG_SS from "../../public/OCG_SS.png";

export const WorkInfo = [
  {
    company: "One Community Global",
    title: "Full-Stack Software Developer & Team Assistant Manager",
    ImgSrc: OCG_SS,
    route: "ocg"
  },
  {
    company: "OptiChroniX",
    title: "Front-End Developer Intern",
    ImgSrc: OptiChroniX_SS,
    route: "optichronix"
  },
  {
    company: "Humanity Uplifting People",
    title: "Web Developer",
    ImgSrc: HUP_SS,
    route: "hup"
  },
]


function resumePage() {  

  return (
    <section className="relative h-full pb-8">
        <div className={`flex flex-col justify-start items-start gap-8 p-2`}>
          <div className="text-3xl text-bold mb-1">Experience</div>
          <div className="mb-4">My work & volunteer experience.</div>
          {WorkInfo.map((item, index) => {
            return (
              <div className="pb-2 w-full md:grid md:grid-cols-[60%,35%] md:gap-12" key={index}>
                <div className="flex justify-center items-center pb-2 hover:scale-[1.05] transition ease-in-out">
                  <Link href={`/experience/${item.route}`}>
                    <Image
                      src={item.ImgSrc}
                      className="rounded-lg shadow-lg shadow-slate-500"
                      height="100%"
                      width="100%"
                      alt="experience item image"
                    />
                  </Link>
                </div>
                <div>
                  <h2 className="text-2xl text-left text-bold pt-2">{item.title}</h2>
                  <h3 className="text-xl text-left">@ {item.company}</h3>
                  <Link href={`/experience/${item.route}`}>
                    <button type="button" className={`w-fit p-2 my-2 md:my-4 bg-purple-200 border border-white border-4 rounded-full hover:bg-white hover:border-purple-400 hover:text-purple-400 transition ease-in-out`}>View Details</button>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default resumePage