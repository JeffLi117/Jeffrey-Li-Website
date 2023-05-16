import Image from "next/image";

function resumePage() {
  return (
    <div className="bg-gray-500/75 p-3 md:p-4 ">
        <div className="flex relative justify-left items-center ">
            <div className="text-5xl lineafter">Resume</div>&nbsp;
        </div>
        <div className="grid grid-cols-1 justify-left items-start pt-4 md:grid-cols-2">
            <div className="md:col-start-1">
              <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Professional Experience</div>
            </div>
            <div className="md:col-start-2">
            <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Education</div>
              <div className="text-1xl m-2 font-bold w-4/5 md:text-2xl">Full-Stack Software Developer</div>
              <div className="m-3 mb-2 font-semibold">The Odin Project</div>
              <div className="m-3">An immersive course on full-stack software development. By following their comprehensive full-stack curriculum, I gained proficiency in front-end and back-end technologies, along with a solid foundation in computer science principles.</div>
              <div className="text-1xl m-2 font-bold w-4/5 md:text-2xl">Doctor Of Osteopathic Medicine</div>
              <div className="m-3 mb-2 font-semibold">Texas College Of Osteopathic Medicine</div>
              <div className="text-1xl m-2 font-bold w-4/5 md:text-2xl">Master Of Medical Sciences</div>
              <div className="m-3 mb-2 font-semibold">University of North Texas Health Science Center</div>
              <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Stack</div>
              <div className="m-3 flex flex-row justify-left items-center" >
                <div className="stack-image-holder">
                  <Image src="/js.png" alt="javascript icon" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="stack-image-holder">
                  <Image src="/react.png" alt="react icon" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="stack-image-holder">
                  <Image src="/firebase.png" alt="firebase icon" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                </div>
                <div className="stack-image-holder">
                  <Image src="/sveltekit.png" alt="sveltekit icon" width="0" height="0" sizes="100vw" className="h-full w-auto m-auto" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default resumePage