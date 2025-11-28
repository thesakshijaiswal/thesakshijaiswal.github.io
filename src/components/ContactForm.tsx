"use client";

import { useState } from "react";
import { MdConnectWithoutContact } from "react-icons/md";
import Button from "@/components/Button";

interface Errors {
  firstName?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validate = (values: any) => {
    const newErrors: Errors = {};

    if (!values.firstName || values.firstName.trim().length < 2) {
      newErrors.firstName = "Please enter a valid first name.";
    }

    if (!values.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(values.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!values.message || values.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }

    return newErrors;
  };

  const validateField = (name: string, value: string) => {
    let message = "";

    if (name === "firstName" && (!value || value.trim().length < 2)) {
      message = "Please enter a valid first name.";
    }

    if (name === "email") {
      if (!value) message = "Email is required.";
      else if (!emailRegex.test(value))
        message = "Enter a valid email address.";
    }

    if (name === "message" && (!value || value.trim().length < 20)) {
      message = "Message must be at least 20 characters.";
    }

    setErrors((prev) => ({ ...prev, [name]: message || undefined }));
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

    const validationErrors = validate(body);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setLoading(false);
      return;
    }

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.ok) {
      form.reset();
      setTouched({});
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
    </>
  );
}
