import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const inputClass =
  "h-11 w-full rounded-full border border-[#d8dee0] bg-white px-4 text-[15px] text-foreground outline-none transition placeholder:text-[#8a8a8a] focus:border-primary focus:ring-2 focus:ring-primary/15";

const labelClass = "text-[13px] font-medium text-foreground";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formState.name}</p>
        <p><strong>Email:</strong> ${formState.email}</p>
        ${formState.company ? `<p><strong>Company:</strong> ${formState.company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${formState.message.replace(/\n/g, "<br>")}</p>
      `;

      const response = await fetch(
        "https://email-service-steel-gamma.vercel.app/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clientId: "fbr_e_invoicing_demo",
            emailBody,
            emailSubject: `New Contact Form Submission from ${formState.name}`,
            recipientsTo: "umairahmed805805@gmail.com",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send email");

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormState({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mx-auto w-full max-w-[640px] overflow-hidden rounded-2xl bg-white text-left shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="border-b border-border px-5 py-5 sm:px-7 sm:py-6">
        <h3 className="text-[1.65rem] leading-tight text-deep">
          Book a discovery call with our team
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Get started with a quick introduction call. Tell us what you&apos;re
          dealing with — we&apos;ll be honest about fit.
        </p>
      </div>

      <div className="relative px-5 py-5 sm:px-7 sm:py-6">
        {isSubmitted && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/95 p-8">
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-primary" />
              <p className="mt-4 font-display text-2xl text-foreground">Thank you</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ll reply within 24 hours.
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>
                Name <span className="text-[#ea4e03]">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                autoComplete="name"
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className={labelClass}>
                Email <span className="text-[#ea4e03]">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                autoComplete="email"
                className={inputClass}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>Company Name</span>
            <input
              type="text"
              name="company"
              value={formState.company}
              onChange={handleChange}
              autoComplete="organization"
              className={inputClass}
              placeholder="Acme Inc"
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className={labelClass}>
              What are you dealing with? <span className="text-[#ea4e03]">*</span>
            </span>
            <textarea
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full resize-none rounded-2xl border border-[#d8dee0] bg-white px-4 py-3 text-[15px] text-foreground outline-none transition placeholder:text-[#8a8a8a] focus:border-primary focus:ring-2 focus:ring-primary/15"
              placeholder="Manual invoice matching, disconnected systems..."
            />
          </label>

          <div className="mt-1 flex items-center justify-between gap-4">
            <p className="text-[13px] text-muted-foreground">We reply within 24 hours.</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-cream-soft transition-colors hover:bg-deep disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send"}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
