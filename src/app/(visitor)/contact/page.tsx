import React from "react";
import ContactFormWrapper from "@/app/components/contact/contactFormWrapper";

export const metadata = {};
const Page = async () => {
  return (
    <div className="flex-grow w-full h-full flex flex-col items-center justify-center">
      <section className="w-full bg-gray-100 px-5 py-10 flex-grow flex justify-center dark:bg-neutral-600">
        <ContactFormWrapper />
      </section>
    </div>
  );
};

export default Page;
