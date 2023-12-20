import Memora_SS from "../../../public/Memora_SS.png";
import Image from "next/image";
import Link from "next/link";

const info = {
    title: "Memora",
    description: ["Memora is a note-taking app with reminders designed for forgetful people.", "With Firebase integration, easily sync and access your notes, tasks, and reminders from anywhere. The intuitive interface makes capturing and organizing information a breeze.", "Boost productivity and stay on top of tasks with Memora."],
    link: "https://memora-jeffli117.vercel.app/",
    ImgSrc: Memora_SS,
    stack: ["JavaScript", "Sveltekit", "Firebase", "Flowbite"]
}

function page() {
    return (
        <section className="relative h-full pb-8">
          <div className={`flex flex-col justify-start items-center gap-4 p-2`}>
            <div className="text-3xl text-bold mb-1">{info.title}</div>
            <ul className="md:mb-4">
                {info.description.map((detail, index) => {
                    return <li key={"inner"+index} className="my-2">{detail}</li>
                })}
            </ul>
            <ul className="flex flex-col justify-center items-center">
                {info.stack.map((detail, index) => {
                    return <li key={index} className="flex justify-start items-center w-full gap-1 my-1 text-slate-600 list-none"><span>&#8250;</span> {detail}</li>
                })}
            </ul>
            <Image
              src={info.ImgSrc}
              className="rounded-lg shadow-lg shadow-slate-500"
              height="100%"
              width="100%"
              alt="project item image"
            />
            <Link href={`${info.link}`}>
                <button type="button" className={`w-fit p-4 my-2 md:my-4 bg-purple-200 border border-white border-4 rounded-full hover:bg-white hover:border-purple-400 hover:text-purple-400 transition ease-in-out`}>Visit Site</button>
            </Link>
          </div>
      </section>
    )
}
  
export default page