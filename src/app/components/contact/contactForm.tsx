import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { sendMessage } from "@/app/services/messageService";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { callRecaptcha } from "@/app/services/recaptchaService";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().max(255).required("First name is required"),
      lastName: Yup.string().max(255).required("Last name is required"),
      email: Yup.string()
        .email("Please enter a valid email")
        .max(255)
        .required("Email is required"),
      message: Yup.string().max(2000).required("Please enter your message"),
    }),
    onSubmit: async (
      { firstName, lastName, email, message },
      { resetForm }
    ) => {
      setSubmitted(true);
      if (!executeRecaptcha) {
        alert("Recaptcha failed");
        return;
      }
      try {
        const result = await executeRecaptcha("login");
        const response = await callRecaptcha(result);
      } catch (e) {
        alert("ReCaptcha failed");
        setSubmitted(false);
        return;
      }
      try {
        const res = await sendMessage({
          firstName,
          lastName,
          email,
          message,
        });
      } catch (e: any) {
        alert(
          e.response?.data?.error ??
            "Error when submitting message. Please try again later."
        );
      }
      resetForm();
      alert("Your message has been submitted successfully.");
      setSubmitted(false);
    },
  });
  const { touched, handleSubmit, handleChange, handleBlur, values, errors } =
    formik;
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="flex flex-wrap mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block tracking-wide text-xl font-bold mb-2 text-primary dark:text-white"
            htmlFor="contact-first-name"
          >
            First Name<span className="text-red-600">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-700 dark:text-white dark:focus:border-white"
            id="contact-first-name"
            type="text"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && (
            <p className="text-red-600 mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block tracking-wide text-primary text-xl font-bold mb-2 dark:text-white"
            htmlFor="contact-last-name"
          >
            Last Name<span className="text-red-600">*</span>
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-700 dark:text-white dark:focus:border-white"
            id="contact-last-name"
            type="text"
            name="lastName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && (
            <p className="text-red-600 mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>
      <div className="w-full px-3 mt-6">
        <label
          className="block tracking-wide text-primary text-xl font-bold mb-2 dark:text-white"
          htmlFor="contact-email"
        >
          Email<span className="text-red-600">*</span>
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-700 dark:text-white dark:focus:border-white"
          id="contact-email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email && (
          <p className="text-red-600 mt-1">{errors.email}</p>
        )}
      </div>
      <div className="w-full px-3 mt-6">
        <label
          className="block  tracking-wide text-primary text-xl font-bold mb-2 dark:text-white"
          htmlFor="contact-message"
        >
          Message<span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:outline-none focus:ring-blue-500 focus:border-2 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-700 dark:text-white dark:focus:border-white"
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        ></textarea>
        {touched.message && errors.message && (
          <p className="text-red-600 mt-1">{errors.message}</p>
        )}
      </div>
      <div className="flex px-3 mt-3 justify-center md:justify-start items-center">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-3 py-2 rounded me-3 flex justify-center items-center"
          disabled={submitted}
        >
          <svg
            className={`h-4 w-4 animate-spin me-2 ${
              submitted ? null : "hidden"
            }`}
            viewBox="3 3 18 18"
          >
            <path
              className="fill-white"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path
              className="fill-secondary"
              d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
            ></path>
          </svg>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
