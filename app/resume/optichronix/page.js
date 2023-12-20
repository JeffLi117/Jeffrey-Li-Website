import OptiChroniX_SS from "../../../public/OptiChroniX_SS.png";
import Image from "next/image";
import BackButtonR from "@/components/BackButtonR";

const info = {
    company: "OptiChroniX",
    description: "OptiChroniX is startup with a focus on addressing the intricate challenges of age-related cognitive decline. Their myAVOS app is crafted to revolutionize chronic care and optimize cognitive aging.",
    title: "Front-End Developer Intern",
    dates: "June 2023 - September 2023",
    responsibilities: [
      "Developed with React Native to implement new components for UI/UX, resulting in a 15% increase in satisfaction for +100 users",
      "Reduced runtime errors by 20% and improved code readability by implementing TypeScript",
      "Utilized Tailwind CSS’s utility-first approach to reduce CSS code size by 10%, resulting in faster page load times for users",
      "Collaborated with 4 developers by using a git version control feature branch strategy and documentation through Jira which increased productivity",
      "Implemented Jest unit testing to increase resiliency against multiple use cases, such as scenarios of user authentication and button-click interactions"
    ],
    ImgSrc: OptiChroniX_SS,
}

function page() {
    return (
        <section className="relative h-full pb-8">
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
                  return <li key={"inner"+index} className="my-1"><span>&#8250;</span> {detail}</li>
              })}
            </ul>
          </div>
          <BackButtonR />
      </section>
    )
  }
  
  export default page