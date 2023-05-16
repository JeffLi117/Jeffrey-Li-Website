import Image from "next/image";

function portfolioPage() {
  return (
    <div className="bg-gray-500/75 p-3 md:p-4 ">
        <div className="flex relative justify-left items-center ">
          <div className="text-5xl lineafter">Portfolio</div>&nbsp;
        </div>
        <div className="pt-4 text-2xl mb-4 font-bold w-4/5 md:text-3xl">My Projects</div>
          <li className="text-1xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span><a href="https://jeffli117.github.io/Finding-Friends/">Finding Friends</a></span></li>
          <li className="mx-3 mb-1"><span>A "Where's Waldo" game that gives you the opportunity to get on the leaderboard!</span></li>
          <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, Firebase, CSS </span></li>

          <li className="text-1xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span><a href="https://jeffli117.github.io/Shop-Till-You-Drop/">Movie Poster Madness</a></span></li>
          <li className="mx-3 mb-1"><span>Fully functional front-end shopping cart app developed with React Hooks.</span></li>
          <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, CSS </span></li>

          <li className="text-1xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span><a href="https://github.com/JeffLi117/Memora">Memora</a></span></li>
          <li className="mx-3 mb-1"><span>Full-stack note-taking app designed for those who need help remembering important information by using
built-in reminders.</span></li>
          <li className="mx-3 mb-1"><span>Synchronization with Firebase for data storage and user authentication.</span></li>
          <li className="mx-3 mb-1"><span>Stack: Sveltekit, Firebase, CSS </span></li>

          <li className="text-1xl portfolio-header m-2 font-bold w-4/5 md:text-2xl"><span><a href="https://jeffli117.github.io/cv-hooks/">CV Generator</a></span></li>
          <li className="mx-3 mb-1"><span>Web app that can generate a curriculum vitae based on the information you input.</span></li>
          <li className="mx-3 mb-1"><span>Stack: React, JS, Webpack, CSS </span></li>

    </div>
  )
}

export default portfolioPage