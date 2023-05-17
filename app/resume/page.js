"use client";

import Image from "next/image";
import { useState, useEffect } from "react";


function resumePage() {
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, [])
  return (
    <div className="bg-gray-500/75 p-3 rounded-xl md:p-4 lg:w-3/4 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }}>
        <div className="flex relative justify-left items-center ">
            <div className="text-5xl lineafter">Resume</div>&nbsp;
        </div>
        <div className="grid grid-cols-1 justify-left items-start pt-4 md:grid-cols-2">
            <div className="md:col-start-1">
              <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Professional Experience</div>
              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Front-End Developer</span></li>
              <div className="m-3 mb-2 font-semibold">Chingu (Apr 2023 - Present)</div>
              <li className="mx-3 mb-1"><span>Regularly pair program with team members to improve team productivity and coding skills</span></li>
              <li className="mx-3 mb-1"><span>Participated in Agile sprint meetings resulting in successful project delivery</span></li>
              <li className="mx-3 mb-1"><span>Contributed to organizing file structure for application and built out higher-level JavaScript/React components
improving code readability and maintainability</span></li>
              
              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Freelance Front-End Developer</span></li>
              <div className="m-3 mb-2 font-semibold">Self-Employed (March 2023 - Present)</div>
              <li className="mx-3 mb-1"><span>Used entrepreneurial expertise, technical skills, and creative talents to develop, market, and maintain websites</span></li>
              <li className="mx-3 mb-1"><span>Worked independently across several projects to meet deadlines</span></li>
              <li className="mx-3 mb-1"><span>Skilled in React, JavaScript, APIs, and CSS to create responsive and data-intensive web designs</span></li>

              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Resident Physician</span></li>
              <div className="m-3 mb-2 font-semibold">HCA Healthcare (June 2022 - Oct 2022)</div>
              <li className="mx-3 mb-1"><span>Led multi-disciplinary teams to design, develop, and implement care plans for patients with best practices
as a Certified Professional in Patient Safety</span></li>
              <li className="mx-3 mb-1"><span>Planned & proactively coordinated inpatient care plans based on timely critical evaluation, troubleshooting,
& interdisciplinary communication</span></li>
            
            </div>
            <div className="md:col-start-2">
            <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Education</div>
              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Full-Stack Software Developer</span></li>
              <div className="m-3 mb-2 font-semibold">The Odin Project</div>
              <li className="mx-3 mb-1"><span>An immersive course on full-stack software development</span></li>
              <li className="mx-3 mb-1"><span>Gained proficiency in front-end and back-end technologies, along with a solid foundation in CS principles</span></li>

              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Doctor Of Osteopathic Medicine</span></li>
              <div className="m-3 mb-2 font-semibold">Texas College Of Osteopathic Medicine</div>
              <li className="mx-3 mb-1"><span>Certified Professional in Patient Safety</span></li>

              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Master Of Medical Sciences</span></li>
              <div className="m-3 mb-2 font-semibold">University of North Texas Health Science Center</div>

              <li className="text-1xl bulleted-header m-2 font-bold w-4/5 md:text-2xl"><span>Bachelor of Science</span></li>
              <div className="m-3 mb-2 font-semibold">University of Texas at Austin</div>
              <li className="mx-3 mb-1"><span>Business Foundations Certificate</span></li>
              <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">Stack</div>
              <div className="m-3 flex flex-col justify-left items-start" >
                <div className="flex flex-row gap-4 stack-image-holder">
                  <Image src="/js.png" alt="javascript icon" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                  <div className="text-xl">JavaScript</div>
                </div>
                <div className="flex flex-row gap-4 stack-image-holder">
                  <Image src="/react.png" alt="react icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" />
                  <div className="text-xl">React</div>
                </div>
                <div className="flex flex-row gap-4 stack-image-holder">
                  <Image src="/firebase.png" alt="firebase icon" width="0" height="0" sizes="100vw" className="w-full h-auto" />
                  <div className="text-xl">Firebase</div>
                </div>
                <div className="flex flex-row gap-4 stack-image-holder">
                  <Image src="/sveltekit.png" alt="sveltekit icon" width="0" height="0" sizes="100vw" className="h-full w-auto m-auto" />
                  <div className="text-xl">SvelteKit</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default resumePage