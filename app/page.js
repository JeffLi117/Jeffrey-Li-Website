import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <section className="relative h-full lg:leading-relaxed lg:text-lg 2xl:leading-loose pb-16 md:pb-8">
      <div className="p-6 bg-purple-100 mt-8 md:mt-12 md:mb-4 rounded-lg lg:p-8">
        <div className="text-3xl mb-4 lg:text-5xl lg:mb-8">
          👋 Hi, I'm Jeffrey.
        </div>
        <div className="text-xl mb-4 lg:text-2xl">
          👨‍⚕️ From fixing people to fixing bugs.
        </div>
        <p className="mb-4">
          I’ve always had a passion for helping others. Coming from a background in healthcare as a doctor, I strived to create solutions for patients with problematic health issues. Now I bring that same passion and problem-solving ability to tech as a full-stack software developer, where I focus on removing bugs with surgical precision, bandaging legacy code, and prescribing modern tech stacks.
        </p>
        <p className="mb-4">I'm currently creating <a href="https://github.com/JeffLi117/Not-In-Vein" className="hover:text-red-400 transition ease-in-out italic">Not In Vein</a>, a centralized web application to remind blood donors when they can give back to others again, as well as aid in searching for nearby donation locations.</p>
        <p className="mb-4">
          In my spare time, I enjoy eating all the pizza, reading fantasy novels (especially those with dragons! 🐉), cooking, and rock climbing.
        </p>
        <p className="mb-4">I'm on <a href="https://github.com/JeffLi117" className="text-blue-400 hover:text-blue-800 transition ease-in-out">GitHub</a> and <a href="https://www.linkedin.com/in/jeffrey-li-do/" className="text-blue-400 hover:text-blue-800 transition ease-in-out">LinkedIn</a>.</p>
      </div>
    </section>
  )
}
