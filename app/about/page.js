// "use client";
function aboutPage() {
    return (
        <div className="flex flex-col justify-start items-start gap-4 pt-2 px-2 animate-fadeIn">
            {/* insert photo here? */}
            <div className="text-3xl text-slate-400 text-bold">ABOUT</div>
            <h2 className="text-2xl text-bold">Hello, I'm Jeffrey Li!</h2>
            <p>I'm a full-stack software developer with a background in medicine. I aim to use my combination of skills to bring about a better quality of life for people around the world. I have created front-end components optimizing user experiences at OptiChroniX, an application for patients with dementia and their caretakers.</p>
            <p>I'm in the process of creating <a href="https://github.com/JeffLi117/Not-In-Vein">Not In Vein</a>, a centralized reminder application to help remind blood donors to keep giving back to others.</p>
            <p>Outside of software, I enjoy eating all the pizza, reading fantasy novels (especially those with dragons!), binging TV shows, and rock climbing.</p>
        </div>
    )
}

// function aboutPage() {
//   const [fade, setFade] = useState(true);

//   useEffect(() => {
//     setFade(false);
//   }, [])

//   return (
//     <div className="bg-gray-500/75 p-3 rounded-xl md:p-4 lg:w-3/4 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }} >
//         <div className="flex relative justify-left items-center ">
//             <div className="text-5xl lineafter">About</div>&nbsp;
//         </div>
//         <div className="pt-4">
//             <div className="flex flex-col relative md:grid " style={{ gridTemplateColumns: '28% 72%'}}>
//                 <div className="imageHolder">
//                     <Image src="/headshot.jpg" alt="professional headshot of Jeffrey Li" priority={true} width="0" height="0" sizes="100vw" style={{ width: '64px', height: 'auto' }} className="rounded-xl absolute top-0 right-0 myhead"/>
//                 </div>
//                 <div>
//                     <div className="bulleted-header text-2xl mb-4 font-bold w-4/5 md:text-3xl">
//                         Full-Stack Software Developer
//                     </div>
//                     <div className="text-1xl flex about-contact flex-col relative md:text-2xl ">
//                         <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
//                             <div>&#8250; &nbsp;<span className="font-bold">Phone:</span>&nbsp;(972) 697-6657</div>
//                         </div>
//                         <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
//                             <div>&#8250; &nbsp;<span className="font-bold">Email:</span>&nbsp;li.jeffreyt@yahoo.com</div>
//                         </div>
//                         <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
//                             <div>&#8250; &nbsp;<span className="font-bold">Location:</span>&nbsp;Houston,&nbsp;TX</div>
//                         </div>
//                         <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
//                             <div>&#8250; &nbsp;<span className="font-bold">Freelance:</span>&nbsp;Available</div>
//                         </div>
//                     </div>
//                     <div className="mb-4 mt-4 md:text-2xl ">I aim to create innovative solutions to the benefit of both users and businesses through consistently utilizing my growing expertise in full-stack development.</div>
//                     <div className="mb-4 mt-4 md:text-2xl ">I strive to create a work environment that is supportive and collaborative. By promoting open and effective communication, I seek to cultivate a culture of teamwork that encourages constructive feedback to fuel innovation and progress.</div>
//                     <div className="mb-4 mt-4 md:text-2xl ">My goal, as a young professional, is to earn the trust and reliability of the development community while utilizing my skills to assist others in accomplishing their professional objectives.</div>
//                 </div>
//             </div>
//         </div>
        
//     </div>
//   )
// }

export default aboutPage