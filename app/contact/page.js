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
    )
  }
  
  export default contactPage