import Finding_Friends_SS from "../../../public/Finding_Friends_SS.png";
import Image from "next/image";
import Link from "next/link";

const info = {
    title: "Finding Friends",
    description: [`Do you like playing "I spy"?`,`Do you find yourself needing a break to just enjoy the beautiful scenery of a busy picture? Now you can!`,`Finding Friends is a "Where's Waldo" style game that tracks how long a player takes to find the 3 hidden characters. The player will be able to enter their name upon completion of the game and their score has the chance to be shown on the leaderboard!`, `Good luck! 🍀`],
    link: "https://jeffli117.github.io/Finding-Friends/",
    ImgSrc: Finding_Friends_SS,
    stack: ["JavaScript", "React.js", "Firebase"]
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