"use client"
import { useRef, useState, useEffect } from "react";
import { FaRegCheckCircle, FaRobot } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import 'dotenv/config';

function EmailMeForm() {
  const reCaptchaRef = useRef();
  const [submitForm, setSubmitForm] = useState({});
  const [isFormValid, setIsFormValid] = useState(false); 
  const [isFormChecked, setIsFormChecked] = useState(false); 
  const [isReCAPTCHAVerified, setIsReCAPTCHAVerified] = useState(false); 
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({}); 
  const [sentResult, setSentResult] = useState(); 

  // == Check form inputs  ==
  const checkForm = (name, message) => {

    const NamesRegex = /^[A-Za-z0-9\s]+$/;
    const messageRegex = /^[^<>]+$/;
    let errors = 0;
    // Test if the input matches the pattern
    if (!NamesRegex.test(name)) {
      console.log("name is NOT valid")
      errors += 1;
    } 
    if (!messageRegex.test(message)) {
      console.log("message is NOT valid")
      errors += 1;
    } 
    
    if (errors === 0)  {
      setIsFormChecked(true);
    }
  }

  // == Validate form ==
  const validateForm = (name, email, message) => { 
    let errors = {}; 

    if (!name) { 
      errors.name = 'Name is required.'; 
    } 

    if (!email) { 
      errors.email = 'Email is required.'; 
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      errors.email = 'Email is invalid.'; 
    } 

    if (!message) { 
      errors.message = 'A message is required.'; 
    }

    setErrors(errors); 
    if (Object.keys(errors).length === 0) {
      setIsFormValid(true); 
    }        
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // == Check honeypots ==
    if (formData.get("_honey") !== "" || formData.get("honey_2") !== "") {
      return;
    }

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    // Check form for malicious scripts
    checkForm(name, message);
    // Validate form 
    validateForm(name, email, message); 
    // Set final form to be submitted
    // console.log("reCaptchaRef.current.props.sitekey is ", reCaptchaRef.current.props.sitekey);
    if (reCaptchaRef.current.props.sitekey) {
      setIsReCAPTCHAVerified(true)
    }
    setSubmitForm({
      name: name,
      email: email,
      message: message,
    })
  }
  
  useEffect(() => {
    const sendEmailAsync = async () => {
      if (isFormChecked && isFormValid && isReCAPTCHAVerified) {
        setIsLoading(true);
        setErrors({});
        try {
          const reCaptchaPayload = reCaptchaRef.current.getValue();
          console.log("both check & validation (& reCAPTCHA) are true!");
          const response = await emailjs.send(
            'service_w33m2bx', // paste your ServiceID here
            'template_9h2mcrq', // paste your TemplateID here
            {
              from_name: submitForm.name,
              to_name: 'Jeffrey Li', // put your name here.
              from_email: submitForm.email,
              to_email: 'jeffrey.t.li.work@gmail.com', // put your email here.
              message: submitForm.message,
              'g-recaptcha-response': reCaptchaPayload,
            },
            '0sBHqADYkt_jck6OS' // paste Public Key here
          );
          setSentResult(true);
          alert('Thank you. I will get back to you as soon as possible.');
  
          setSubmitForm({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          console.log(error);
          setSentResult(false);
          alert('Something went wrong. Please try again.');
        }
      }
    };
  
    sendEmailAsync();
  
    return () => {};
  }, [isFormChecked, isFormValid, isReCAPTCHAVerified]);

  useEffect(() => {
    console.log("errors is now ", errors)
  }, [errors])

  return (
    <div className="w-full">
        <form className="relative flex flex-col gap-4 justify-start items-start" method="POST" action="/form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="7ba84f65-f451-43da-8ecb-b808b6c4164b"/>
            <input type="text" name="_honey" className="hidden" aria-hidden="true" />
            <input type="text" name="honey_2" className="opacity-0 absolute top-0 right-0 w-[1px] h-[1px]" aria-hidden="true"/>
            <input type="checkbox" name="botcheck" className="hidden"/>

            <div className="w-full text-sm text-gray-500">
              <label htmlFor="name">NAME <span className="text-red-700">*</span></label>
              <input type="text" name="name" placeholder="Your name" className={`h-[42px] mt-1 border border-2 border-slate-400 bg-transparent w-full px-2 rounded-lg`} required/>
              {(errors.name) && <p className="text-red">{errors.name}</p>} 
            </div>
            
            <div className="w-full text-sm text-gray-500">
              <label htmlFor="email">EMAIL <span className="text-red-700">*</span></label>
              <input type="email" name="email" placeholder="Your email" className={`h-[42px] mt-1 border border-2 border-slate-400 bg-transparent w-full px-2 rounded-lg`} required/>
              {(errors.email) && <p className="text-red">{errors.email}</p>} 
            </div>
            
            <div className="w-full text-sm text-gray-500">
              <label htmlFor="message">MESSAGE <span className="text-red-700">*</span></label>
              <textarea name="message" rows="5" placeholder="Your message ..." className={`min-h-[42px] mt-1 border border-2 border-slate-400 bg-transparent w-full p-2 rounded-lg`} required></textarea>
              {(errors.message) && <p className="text-red">{errors.message}</p>} 
            </div>
            
            <ReCAPTCHA ref={reCaptchaRef} sitekey={process.env.NEXT_PUBLIC_SITE_KEY} />
            {(sentResult === true || sentResult === false || isLoading === true) ? null : <button type="submit" className={`w-fit p-2 bg-purple-200 border border-white border-4 rounded-full hover:bg-white hover:border-purple-400 hover:text-purple-400 transition ease-in-out`}>Send Message</button>}
            {((!(sentResult === true) && !(sentResult === false)) && isLoading === true) && <button type="button" className={`w-fit p-2 flex justify-center items-center gap-1 border bg-purple-200 border-white border-4 rounded-full`}>Sending...</button>}
            {sentResult === true && <button type="button" className={`w-fit p-2 flex justify-center items-center gap-1 border bg-purple-200 border-white border-4 rounded-full`}><FaRegCheckCircle /> Sent!</button>}
            {sentResult === false && <button type="button" className={`w-fit p-2 flex justify-center items-center gap-1 border bg-purple-200 border-white border-4 rounded-full`}><MdErrorOutline /> Oops! Something went wrong.</button>}
        </form>
    </div>
    
  )
}

export default EmailMeForm