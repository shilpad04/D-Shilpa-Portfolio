import { Send, CheckCircle, AlertCircle, Linkedin } from "lucide-react";
import { Button } from "../components/Button";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const [formData, setFormData] = useState({
    user_email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });

      setFormData({
        user_email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 lg:py-16 bg-background relative"
    >
      <div className="max-w-2xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className={`text-4xl md:text-5xl font-bold text-secondary-foreground transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Contact
          </h2>

          <p
            className={`text-muted-foreground mt-3 text-sm transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Feel free to reach out regarding opportunities or collaboration.
          </p>
        </div>

        {/* Contact Card */}
        <div
          className={`glass skill-glow rounded-2xl p-6 md:p-8 transition-all duration-700 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-xs font-medium mb-2 text-muted-foreground">
                Your Email
              </label>
              <input
                type="email"
                required
                value={formData.user_email}
                onChange={(e) =>
                  setFormData({ ...formData, user_email: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                placeholder="your@email.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-medium mb-2 text-muted-foreground">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                placeholder="Subject..."
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-medium mb-2 text-muted-foreground">
                Message
              </label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2.5 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="default"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`flex items-center gap-3 p-3 rounded-xl text-sm ${
                  submitStatus.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {submitStatus.type === "success" ? (
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                )}
                <p>{submitStatus.message}</p>
              </div>
            )}
          </form>

          {/* LinkedIn */}
          <div className="mt-6 pt-4 border-t border-border/40 text-center">
            <div className="flex items-center justify-center gap-3 text-muted-foreground text-xs">
              <span>Connect with me on</span>
              <a
                href="https://www.linkedin.com/in/shilpa-d-5547361a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};