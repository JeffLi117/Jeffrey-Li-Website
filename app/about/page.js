import Image from "next/image";


function aboutPage() {
  return (
    <div className="bg-gray-500/75 p-4 " >
        <div className="flex relative justify-left items-center ">
            <div className="text-5xl lineafter">About</div>&nbsp;
        </div>
        <div className="pt-4">
            <div className="flex flex-col relative md:grid " style={{ gridTemplateColumns: '28% 72%'}}>
                <div className="imageHolder">
                    <Image src="/headshot.jpg" alt="professional headshot of Jeffrey Li" priority={true} width="0" height="0" sizes="100vw" style={{ width: '64px', height: 'auto' }} className="rounded-full absolute top-0 right-0 myhead"/>
                </div>
                <div>
                    <div className="text-2xl mb-4 font-bold w-4/5 md:text-3xl">
                        Full-Stack Software Developer
                    </div>
                    <div className="text-1xl md:text-2xl flex flex-col relative md:grid " style={{ gridTemplateColumns: '50% 50%', gridTemplateRows: '50% 50%'}}>
                        <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
                            <div>&#8250; &nbsp;<span className="font-bold">Phone:</span>&nbsp;(972) 697-6657</div>
                        </div>
                        <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
                            <div>&#8250; &nbsp;<span className="font-bold">Email:</span>&nbsp;li.jeffreyt@yahoo.com</div>
                        </div>
                        <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
                            <div>&#8250; &nbsp;<span className="font-bold">City:</span>&nbsp;Houston</div>
                        </div>
                        <div className="flex flex-col justify-center align-left md:flex-row,justify-left">
                            <div>&#8250; &nbsp;<span className="font-bold">Freelance:</span>&nbsp;Available</div>
                        </div>
                    </div>
                    <div className="mb-4 mt-4 md:text-2xl ">I aim to create innovative solutions to the benefit of both users and businesses through consistently utilizing my growing expertise in full-stack development.</div>
                    <div className="mb-4 mt-4 md:text-2xl ">I strive to create a work environment that is supportive and collaborative. By promoting open and effective communication, I seek to cultivate a culture of teamwork that encourages constructive feedback to fuel innovation and progress.</div>
                    <div className="mb-4 mt-4 md:text-2xl ">My goal, as a young professional, is to earn the trust and reliability of the development community while utilizing my skills to assist others in accomplishing their professional objectives.</div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default aboutPage