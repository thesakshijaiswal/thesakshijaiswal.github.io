export interface ContactFormPayload {
  firstName: string;
  lastName?: string;
  email: string;
  message: string;
}

export type ContactFormErrors = Partial<
  Record<keyof ContactFormPayload, string>
>;

const EMAIL_REGEX =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const CODE_REGEX =
  /<\/?[a-z][\s\S]*>|function\s*\(|=>|\{|\};|<\/script>/i;

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return map[char];
  });
}

export function validateContactForm(
  data: Partial<ContactFormPayload>
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = "Please enter a valid first name.";
  }

  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!data.message || data.message.trim().length < 20) {
    errors.message = "Message must be at least 20 characters.";
  } else if (CODE_REGEX.test(data.message)) {
    errors.message = "Code or HTML is not allowed in the message.";
  }

  return errors;
}
