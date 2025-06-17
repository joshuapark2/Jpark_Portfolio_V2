import {
  Github,
  Linkedin,
  LinkedinIcon,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 md:pl-12">
              Contact Information
            </h3>
            <div className="space-y-6 justify-center">
              <div className="grid grid-cols-[auto_1fr] items-center md:gap-4">
                <div className="self-start rounded-full bg-primary/10 p-2">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:joshuapark1309@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    joshuapark1309@gmail.com
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-center md:gap-4">
                <div className="self-start rounded-full bg-primary/10 p-2">
                  <LinkedinIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Linkedin</h4>
                  <a
                    href="https://www.linkedin.com/in/joshuapark1309/"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/joshuapark1309
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-[auto_1fr] items-center md:gap-4">
                <div className="self-start rounded-full bg-primary/10 p-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Georgia, United States
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 md:pl-12">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/joshuapark1309/"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a href="https://github.com/joshuapark2" target="_blank">
                  <Github />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden "
                  placeholder="John Doe"
                ></input>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden "
                  placeholder="John_Doe_123@gmail.com"
                ></input>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
