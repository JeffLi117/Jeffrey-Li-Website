import Image from "next/image";

function contactPage() {
    return (
      <div className="bg-gray-500/75 p-3 md:p-4 md:text-2xl">
          <div className="flex relative justify-left items-center ">
              <div className="text-5xl lineafter">Contact</div>&nbsp;
          </div>
          <div className="md:grid grid-cols-12 grid-rows-4">
            <div className="bg-gray-800/75  flex flex-col justify-left items-start gap-4 mt-4 p-2 md:row-start-1 row-span-1 col-start-2 col-span-6">
                <div className="text-xl">Email me</div>
                <div className="flex flex-row justify-left items-center gap-4">
                    <div className="flex flex-row gap-4 stack-image-holder contact-hover">
                        <a href="mailto:li.jeffreyt@yahoo.com" className="m-auto"><Image src="/mail.svg" alt="mail icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" /></a>
                    </div>
                    <div className="w-full">li.jeffreyt@yahoo.com</div>
                </div>
            </div>
            <div className="bg-gray-800/75  flex flex-col justify-left items-start gap-4 mt-4 p-2 md:row-start-2 row-span-1 col-start-3 col-span-6">
                <div className="text-xl">Call me</div>
                <div className="flex flex-row justify-left items-center gap-4">
                    <div className="flex flex-row gap-4 m-auto stack-image-holder">
                        <Image src="/phone-call.svg" alt="phone calling icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" />
                    </div>
                    <div className="w-full">(972)&nbsp;697-6657</div>
                </div>
            </div>
            <div className="bg-gray-800/75  flex flex-col justify-left items-start gap-4 mt-4 p-2 md:row-start-3 row-span-1 col-start-4 col-span-6">
                <div className="text-xl">LinkedIn Profile</div>
                <div className="flex flex-row justify-left items-center gap-4">
                    <div className="flex flex-row gap-4 stack-image-holder contact-hover">
                        <a href="https://www.linkedin.com/in/jeffrey-li-do/" className="m-auto"><Image src="/linkedin.svg" alt="LinkedIn icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" /></a>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800/75  flex flex-col justify-left items-start gap-4 mt-4 p-2 md:row-start-4 row-span-1 col-start-5 col-span-6">
                <div className="text-xl">Location</div>
                <div className="flex flex-row justify-left items-center gap-4">
                    <div className="flex flex-row gap-4 m-auto stack-image-holder">
                        <Image src="/map-pin.svg" alt="map pin icon" width="0" height="0" sizes="100vw" className="w-full h-auto m-auto" />
                    </div>
                    <div className="w-full">Houston, TX</div>
                </div>
            </div>
          </div>
      </div>
    )
  }
  
  export default contactPage