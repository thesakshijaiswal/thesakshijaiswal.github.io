import { MdConnectWithoutContact } from "react-icons/md";
import Button from "@/components/Button";

export default function ContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className="mt-16 ml-14 max-w-xl sm:mt-20 sm:mr-6 lg:mr-12"
      aria-describedby="contact-description"
    >
      <span id="contact-description" className="sr-only">
        Use this form to send me your message, including your name, email, and
        your inquiry.
      </span>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="first-name" className="block text-sm font-semibold">
            First name <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              type="text"
              name="first-name"
              placeholder="Your First Name"
              autoComplete="given-name"
              required
              aria-required="true"
              className="block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 -outline-offset-1 outline-gray-300/70 placeholder:text-sm placeholder:text-gray-500 dark:bg-white/5 dark:outline-white/10"
            />
          </div>
        </div>
        <div>
          <label htmlFor="last-name" className="block text-sm font-semibold">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              type="text"
              name="last-name"
              placeholder="Your Last Name"
              autoComplete="family-name"
              className="block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 -outline-offset-1 outline-gray-300/70 placeholder:text-sm placeholder:text-gray-500 dark:bg-white/5 dark:outline-white/10"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              required
              aria-required="true"
              className="block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 -outline-offset-1 outline-gray-300/70 placeholder:text-sm placeholder:text-gray-500 dark:bg-white/5 dark:outline-white/10"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              placeholder="Write your message…"
              rows={5}
              required
              aria-required="true"
              className="block w-full resize-none rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 -outline-offset-1 outline-gray-300/70 placeholder:text-sm placeholder:text-gray-500 dark:bg-white/5 dark:outline-white/10"
            ></textarea>
          </div>

          <div className="my-12 flex justify-center">
            <Button
              text="Let's Talk"
              icon={<MdConnectWithoutContact size={18} aria-hidden="true" />}
              title="Submit the contact form"
              aria-label="Submit the contact form"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
