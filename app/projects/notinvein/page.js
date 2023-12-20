import NIV_SS from "../../../public/NIV_SS.png";
import Image from "next/image";
import Link from "next/link";

const info = {
    title: "Not In Vein",
    description: ["If you're someone who routinely donates blood or is interested in doing so, Not In Vein (NIV) is the application for you.", "We remind users of upcoming appointments and help them find nearby donation options. We also save important information such as most visited locations, when you can next donate, and more."],
    link: "https://github.com/JeffLi117/Not-In-Vein",
    ImgSrc: NIV_SS,
    stack: ["JavaScript", "Next.js", "Express.js", "Tailwind CSS", "AWS"]
}

function page() {
    return (
        <section className="relative h-full pb-8">
          <div className={`flex flex-col justify-start items-center gap-4 p-2`}>
            <div className="text-3xl text-bold mb-1">{info.title}</div>
            <ul className="md:mb-4 lg:leading-relaxed">
                {info.description.map((detail, index) => {
                    return <li key={"inner"+index} className="my-2">{detail}</li>
                })}
            </ul>
            <ul className="flex flex-col md:flex-row md:gap-4 justify-center items-center">
                {info.stack.map((detail, index) => {
                    return <li key={index} className="flex justify-start items-center w-full md:w-fit gap-1 my-1 text-slate-600 list-none"><span>&#8250;</span> {detail}</li>
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