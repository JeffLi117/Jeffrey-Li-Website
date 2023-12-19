import Navbar from "@/components/Navbar";

function page() {
  return (
    <section className="relative mx-4 h-full pb-8 md:mx-16 lg:mx-44">
        <Navbar />
        <div className={`flex flex-col justify-start items-start gap-8 p-2`}>
          <div className="text-3xl text-bold mb-1">One Community Global</div>
          <div className="mb-4">Something something about OGC here.</div>
        </div>
    </section>
  )
}

export default page