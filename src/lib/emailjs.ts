import emailjs from "@emailjs/browser";

export const EMAILJS_SERVICE_ID = "service_4s5lsdc";
export const EMAILJS_TEMPLATE_ID = "template_3v4t2er";
export const EMAILJS_PUBLIC_KEY = "LHhhab8fiZXeSNaGT";

export interface LeadFormPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceLabel: string;
  message: string;
  formSource: string;
}

export const sendLeadForm = async (payload: LeadFormPayload) => {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: payload.name,
      reply_to: payload.email,
      phone: payload.phone,
      service: payload.serviceLabel || "Not specified",
      message: payload.message || "No details provided",
      form_source: payload.formSource,
    },
    EMAILJS_PUBLIC_KEY
  );
};
