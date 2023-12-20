import Image from "next/image";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <section className="relative h-full lg:leading-relaxed lg:text-lg 2xl:leading-loose">
      <div className="p-6 bg-purple-100 mt-12 rounded-lg lg:p-8">
        <div className="text-3xl mb-4 lg:text-5xl lg:mb-8">
          👋 Hi, I'm Jeffrey.
        </div>
        <p className="mb-4">I'm a full-stack software developer from Texas. I'm currently creating <a href="https://github.com/JeffLi117/Not-In-Vein" className="hover:text-red-200 transition ease-in-out italic">Not In Vein</a>, a centralized web application to remind blood donors when they can give back to others again, as well as aid in searching for nearby donation locations. In my spare time, I enjoy eating all the pizza, reading fantasy novels (especially those with dragons! 🐉), cooking, and rock climbing.</p>
        <p className="mb-4">I'm on <a href="https://github.com/JeffLi117" className="text-blue-400">GitHub</a> and <a href="https://www.linkedin.com/in/jeffrey-li-do/" className="text-blue-400">LinkedIn</a>.</p>
      </div>
    </section>
  )
}
