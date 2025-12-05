"use client";

import { useState } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import Button from "@/components/Button";
import Toast from "@/components/Toast";
import {
  validateContactForm,
  ContactFormErrors,
} from "@/lib/contactForm.validator";

export default function ContactForm() {
  const API_URL =
    process.env.NEXT_PUBLIC_CONTACT_API_URL ??
    "https://thesakshi.vercel.app/api/contact";
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [toast, setToast] = useState<string | null>(null);

  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const pastedText = e.clipboardData.getData("text");

    const containsCodeOrHtml =
      /<\/?[a-z][\s\S]*>|function\s*\(|=>|\{|\};|<\/script>/i.test(pastedText);

    if (containsCodeOrHtml) {
      e.preventDefault();

      setErrors((prev) => ({
        ...prev,
        message: "Code or HTML is not allowed in the message.",
      }));

      setTouched((prev) => ({ ...prev, message: true }));
    }
  };

  const validateField = (name: string, value: string) => {
    const fieldErrors = validateContactForm({ [name]: value });

    setErrors((prev) => ({
      ...prev,
      [name]: fieldErrors[name as keyof ContactFormErrors],
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    setTouched({
      firstName: true,
      email: true,
      message: true,
    });

    const validationErrors = validateContactForm(body);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    setLoading(false);

    if (response.ok) {
      form.reset();
      setTouched({});
      setToast("Form successfully submitted! I will get in touch shortly 🎉");
    } else {
      setToast(result.error || "Something went wrong.");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mt-16 ml-14 max-w-xl sm:mt-20 sm:mr-6 lg:mr-12"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Your First Name"
              onBlur={handleBlur}
              autoComplete="given-name"
              className="mt-2.5 block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm capitalize outline-1 outline-gray-300/70 dark:bg-white/5 dark:outline-white/10"
            />
            {touched.firstName && errors.firstName && (
              <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
            )}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold">
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Your Last Name"
              autoComplete="family-name"
              className="mt-2.5 block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm capitalize outline-1 outline-gray-300/70 dark:bg-white/5 dark:outline-white/10"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              autoComplete="email"
              onBlur={handleBlur}
              className="mt-2.5 block w-full rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 outline-gray-300/70 dark:bg-white/5 dark:outline-white/10"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-xs text-red-500">{errors.email}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message…"
              onBlur={handleBlur}
              onPaste={handlePaste}
              className="mt-2.5 block w-full resize-none rounded-md bg-gray-50 px-3.5 py-2 text-sm outline-1 outline-gray-300/70 dark:bg-white/5 dark:outline-white/10"
            />
            {touched.message && errors.message && (
              <p className="mt-1 text-xs text-red-500">{errors.message}</p>
            )}
          </div>

          <div className="my-12 flex justify-center sm:col-span-2">
            <Button
              text={loading ? "Sending..." : "Let's Talk"}
              icon={<MdConnectWithoutContact size={18} />}
              disabled={loading}
              type="submit"
            />
          </div>
        </div>
      </form>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
}
