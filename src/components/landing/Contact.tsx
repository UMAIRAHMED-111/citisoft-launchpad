import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

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
      // Construct email body HTML
      const emailBody = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formState.name}</p>
        <p><strong>Email:</strong> ${formState.email}</p>
        ${formState.company ? `<p><strong>Company:</strong> ${formState.company}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${formState.message.replace(/\n/g, '<br>')}</p>
      `;

      const response = await fetch('https://email-service-steel-gamma.vercel.app/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          clientId: 'fbr_e_invoicing_demo',
          emailBody: emailBody,
          emailSubject: `New Contact Form Submission from ${formState.name}`,
          recipientsTo: 'umairahmed805805@gmail.com',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Success
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormState({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
      setTimeout(() => setError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border bg-card py-20 lg:py-28">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center">
            <h2 className="font-display mb-6 text-3xl font-semibold leading-[1.1] tracking-tight text-foreground xs:text-4xl sm:text-5xl">
              Talk to our team
            </h2>
            
            <p className="mb-10 max-w-lg text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Whether you need software delivery, automation, or a clearer data
              foundation — tell us about the operation and we&apos;ll respond with
              a practical next step.
            </p>
            
            {/* Contact info */}
            <div className="space-y-4 sm:space-y-5 mb-10">
              <a 
                href="mailto:info@citisoftsolutions.com" 
                className="group flex items-center gap-3 sm:gap-4 text-slate-700 hover:text-slate-900 transition-colors"
              >
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center justify-center group-hover:shadow-xl group-hover:border-[hsl(var(--citisoft-light))]/30 group-hover:scale-105 transition-all duration-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--citisoft-dark))]" />
                  <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[hsl(var(--citisoft-light))]/0 to-[hsl(var(--citisoft-dark))]/0 group-hover:from-[hsl(var(--citisoft-light))]/10 group-hover:to-[hsl(var(--citisoft-dark))]/5 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 mb-0.5">Email us</p>
                  <p className="break-all text-sm font-medium sm:break-normal sm:text-base">
                    info@citisoftsolutions.com
                  </p>
                </div>
              </a>
              
              <div className="group flex items-center gap-3 sm:gap-4 text-slate-700">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/80 shadow-lg shadow-slate-200/50 flex items-center justify-center">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[hsl(var(--citisoft-dark))]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-500 mb-0.5">Visit us</p>
                  <p className="text-sm sm:text-base font-medium">Houston, Texas</p>
                </div>
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-slate-400 text-sm font-light">
              No obligation. Clear conversations. Practical outcomes.
            </p>
          </div>
          
          {/* Right column - Form */}
          <div className="relative">
            {/* Form card */}
            <div className="relative rounded-sm border border-border bg-background p-6 sm:p-8 lg:p-10 card-shadow">
              {/* Success message */}
              {isSubmitted && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-sm bg-background p-8">
                  <div className="text-center max-w-md">
                    {/* Success icon with elegant animation */}
                    <div className="relative w-24 h-24 mx-auto mb-8">
                      {/* Outer rings */}
                      <div className="absolute inset-0 rounded-full border-2 border-[hsl(var(--citisoft-light))]/30 animate-ping" />
                      <div className="absolute inset-2 rounded-full border-2 border-[hsl(var(--citisoft-dark))]/20 animate-pulse" style={{ animationDelay: '0.2s' }} />
                      
                      {/* Icon container */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[hsl(var(--citisoft-light))] to-[hsl(var(--citisoft-dark))] flex items-center justify-center shadow-2xl shadow-[hsl(var(--citisoft-dark))]/30">
                        <CheckCircle className="w-12 h-12 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
                      Thank You!
                    </h3>
                    
                    {/* Main message */}
                    <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
                      Your message has been successfully delivered.
                    </p>
                    
                    {/* What's next section */}
                    <div className="bg-white/80 border border-slate-200/60 rounded-2xl p-6 mb-6">
                      <p className="text-sm font-medium text-slate-700 mb-3">What happens next?</p>
                      <ul className="space-y-2 text-left text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--citisoft-dark))] mt-1.5 flex-shrink-0" />
                          <span>Our team will review your inquiry within 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--citisoft-dark))] mt-1.5 flex-shrink-0" />
                          <span>You'll receive a personalized response via email</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--citisoft-dark))] mt-1.5 flex-shrink-0" />
                          <span>We'll schedule a consultation to discuss your needs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Error message */}
              {error && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-sm bg-background">
                  <div className="text-center px-6">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-rose-500 opacity-20 animate-ping" />
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                        <AlertCircle className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Oops!</h3>
                    <p className="text-slate-500">{error}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name <span className="text-[hsl(var(--citisoft-dark))]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[hsl(var(--citisoft-light))] focus:ring-4 focus:ring-[hsl(var(--citisoft-light))]/10 focus:bg-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  {/* Email */}
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email <span className="text-[hsl(var(--citisoft-dark))]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[hsl(var(--citisoft-light))] focus:ring-4 focus:ring-[hsl(var(--citisoft-light))]/10 focus:bg-white transition-all duration-300"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                {/* Company */}
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[hsl(var(--citisoft-light))] focus:ring-4 focus:ring-[hsl(var(--citisoft-light))]/10 focus:bg-white transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                {/* Message */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    How can we help? <span className="text-[hsl(var(--citisoft-dark))]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[hsl(var(--citisoft-light))] focus:ring-4 focus:ring-[hsl(var(--citisoft-light))]/10 focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="group h-12 w-full rounded-sm bg-primary font-semibold text-primary-foreground transition-colors hover:bg-[hsl(var(--citisoft-dark))] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
