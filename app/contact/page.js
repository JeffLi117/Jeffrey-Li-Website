import EmailMeForm from "@/components/EmailMeForm";

function contactPage() {

    return (
        <section className="relative h-full pb-8">
            <div className={`flex flex-col justify-start items-start gap-4 p-2`}>
                <div className="text-3xl text-bold mb-1">Contact Me</div>
                <div className="mb-4">If you'd like to chat about a project, need help building something, or just have a question, please fill out the form below. I'll get back to you as soon as I can!</div>
                <EmailMeForm />
            </div>
        </section>
    //   <div className="bg-gray-500/75 p-3 rounded-xl md:p-4 md:text-2xl lg:w-3/4 fade-test" style={{ opacity:`${fade ? "0" : "1"}` }}>
    //       <div className="flex relative justify-left items-center ">
    //           <div className="text-5xl lineafter">Contact</div>&nbsp;
    //       </div>
    //       <div className="flex flex-col justify-center items-center">
    //         <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full md:w-2/4 each-contact">
    //             <div className="text-xl">Email me</div>
    //             <div className="flex flex-row justify-left items-center gap-4">
    //                 <div className="flex flex-row gap-4 stack-image-holder contact-hover">
    //                     <a href="mailto:li.jeffreyt@yahoo.com" className="m-auto"><Image src="/mail.svg" alt="mail icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" /></a>
    //                 </div>
    //                 <div className="w-full">li.jeffreyt@yahoo.com</div>
    //             </div>
    //         </div>
    //         <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full md:w-2/4 each-contact">
    //             <div className="text-xl">Call me</div>
    //             <div className="flex flex-row justify-left items-center gap-4">
    //                 <div className="flex flex-row gap-4 m-auto stack-image-holder contact-hover">
    //                 <a href="tel:+9726976657" className="m-auto"><Image src="/phone-call.svg" alt="phone calling icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" /></a>
    //                 </div>
    //                 <div className="w-full">(972)&nbsp;697-6657</div>
    //             </div>
    //         </div>
    //         <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full md:w-2/4 each-contact">
    //             <div className="text-xl">LinkedIn Profile</div>
    //             <div className="flex flex-row justify-left items-center gap-4">
    //                 <div className="flex flex-row gap-4 stack-image-holder contact-hover">
    //                     <a href="https://www.linkedin.com/in/jeffrey-li-do/" className="m-auto"><Image src="/linkedin.svg" alt="LinkedIn icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" /></a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className="bg-gray-800/75 flex flex-col justify-left items-start gap-2 mt-4 p-2 w-full md:w-2/4 each-contact">
    //             <div className="text-xl">Location</div>
    //             <div className="flex flex-row justify-left items-center gap-4">
    //                 <div className="flex flex-row gap-4 m-auto stack-image-holder contact-hover">
    //                     <Image src="/map-pin.svg" alt="map pin icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" />
    //                 </div>
    //                 <div className="w-full">Houston, TX</div>
    //             </div>
    //         </div>
    //       </div>
    //   </div>
    )
  }
  
  export default contactPage