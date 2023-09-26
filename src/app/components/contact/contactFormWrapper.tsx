"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactForm from "@/app/components/contact/contactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";

const ContactFormWrapper = () => {
  return (
    <div className="mb-auto bg-white dark:bg-neutral-800 rounded-xl px-5 py-10 w-full max-w-4xl">
      <div className="flex md:justify-start justify-center text-2xl md:text-4xl mb-7 ">
        <div className="contact-title flex justify-start items-center">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="me-2 md:me-3 text-indigo-600 font-bold dark:text-white"
          />
          <p className={"text-indigo-600 font-bold text-xl sm:text-4xl"}>
            Send me a message
          </p>
        </div>
      </div>
      <hr className="mb-6" />
      <GoogleReCaptchaProvider
        reCaptchaKey={
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            ? process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
            : ""
        }
      >
        <ContactForm />
      </GoogleReCaptchaProvider>
    </div>
  );
};

export default ContactFormWrapper;
