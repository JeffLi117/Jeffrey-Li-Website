import BackButton from "@/components/BackButton"

const info = {
    company: "Humanity Uplifting People",
    description: "Humanity Uplifting People is a charity whose mission is to provide practical support that helps people help themselves out of poverty.",
    title: "Web Developer",
    dates: "April 2023 - Present",
    responsibilities: [
      "Transformed the organization's website using Next.js and enhanced user experience and responsiveness, resulting in an increase in site traffic and improved engagement",
      "Leveraged advanced web development practices to boost HUP's online presence, resulting in an improvement in search engine rankings and increased organic traffic"
    ],
    ImgSrc: "HUP_SS.png",
}

function page() {
  return (
    <section className="relative h-full pb-12">
        <div className={`flex flex-col justify-start items-center gap-8 p-2`}>
        <div className="text-3xl text-bold mb-1">{info.company}</div>
          <div className="md:mb-4">{info.description}</div>
          <img
            src="/HUP_SS.png"
            className="rounded-lg shadow-lg shadow-slate-500"
            height="100%"
            width="100%"
            alt="project item image"
          />
          <ul>
            <p className="my-2 italic">{info.dates}</p>
            {info.responsibilities.map((detail, index) => {
                return <li key={"inner"+index} className="my-2"><span>&#8250;</span> {detail}</li>
            })}
          </ul>
        </div>
        <BackButton destination="experience" />
    </section>
  )
}

export default page