import OCG_SS from "../../../public/OCG_SS.png";
import Image from "next/image";

const info = {
    company: "One Community Global",
    description: "One Community Global is an open source project that aims to usher in a new age of cooperation, collaboration, and sustainability.",
    title: "Full-Stack Software Developer & Team Assistant Manager",
    dates: "September 2023 - Present",
    responsibilities: [
      "Create components and permissions that allow client login to display related content with role-based security",
      "Collaborated and assisted in leading a diverse team in a React, Redux, Node.js, and MongoDB environment, significantly contributing to GitHub Pull Requests",
      "Consistently provide comprehensive weekly summary reports, videos, and snapshots of implemented changes, ensuring transparency, accountability, and improved project coordination"
    ],
    ImgSrc: OCG_SS,
}

function page() {
    return (
        <section className="relative h-full pb-12">
          <div className={`flex flex-col justify-start items-center gap-8 p-2`}>
            <div className="text-3xl text-bold mb-1">{info.company}</div>
            <div className="md:mb-4">{info.description}</div>
            <Image
              src={info.ImgSrc}
              className="rounded-lg shadow-lg shadow-slate-500"
              height="100%"
              width="100%"
              alt="project item image"
            />
            <ul>
              <p className="my-2 italic">{info.dates}</p>
              {info.responsibilities.map((detail, index) => {
                  return <li key={"inner"+index} className="my-2"><span>&#8250;</span> {detail}</li>
              })}
            </ul>
          </div>
      </section>
    )
}
  
export default page