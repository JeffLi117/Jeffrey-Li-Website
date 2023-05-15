import Image from "next/image";


function aboutPage() {
  return (
    <div>
        <div className="flex justify-left items-center">
            <div className="text-2xl">About</div>&nbsp;
            <hr className="border-1 border-solid w-28" />
        </div>
        <div className="p-4">
            <div className="grid" style={{ gridTemplateColumns: '40% 60%' }}>
                <Image src="/headshot.jpg" alt="professional headshot of Jeffrey Li" width="0" height="0" sizes="100vw" style={{ width: '60%', height: 'auto' }} className="rounded-lg"/>
                <div>Full-Stack Software Engineer</div>
            </div>
        </div>
        
    </div>
  )
}

export default aboutPage