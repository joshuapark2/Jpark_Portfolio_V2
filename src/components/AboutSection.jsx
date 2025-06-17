import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Front-End Software Engineer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
              As a front-end engineer with experience across federal and EdTech
              projects, I focus on building accessible, scalable, and
              high-performing web applications using React, TypeScript, Redux,
              and Tailwind CSS.
            </p>
            <p className="text-muted-foreground">
              I take pride in crafting thoughtful solutions—from improving UX
              and ADA compliance to optimizing deployment pipelines—and
              continuously sharpen my skills through real-world projects and a
              passion for clean, user-centered design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="/Park_Joshua_Resume.pdf"
                download="Park_Joshua_Resume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* Right Content */}
          <div className="grid grid-cols-1 gap-6">
            {/* Right Content 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="[-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            {/* Right Content 2 */}
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="[-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            {/* Right Content 3 */}
            <div className="gradient-border p-6 card-hover">
              {" "}
              <div className="flex items-start gap-4">
                <div className="[-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
