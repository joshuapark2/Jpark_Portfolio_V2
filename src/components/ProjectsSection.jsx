import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Pega Business Case Lifecycle Management App",
    description:
      "A full-stack CPQ demo app that streamlines complex business workflows using React, TypeScript, and Kotlin with Spring Boot—modeled on Pegasystems' Case Lifecycle.",
    image: "/projects/Pegasystems.webp",
    tags: ["React", "TailwindCSS", "Java", "Kotlin"],
    demoURL:
      "https://lively-buffer-cd7.notion.site/CPQ-Product-Demo-Joshua-Park-1e4dafd175e280b7aca3c88b3cf2cefc?source=copy_link",
    githubUrl: "https://github.com/joshuapark2/FullStack_CRUD_LifeCycle",
  },
  {
    id: 2,
    title: "Agora GT Journaling",
    description:
      "Georgia Tech Journaling Club of creating and curating pieces that reflect the beauty of life.",
    image: "/projects/Agora.webp",
    tags: ["React", "TailwindCSS", "Next.js", "Firebase"],
    demoURL: "https://gtagora.com/",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ICF Website Demo",
    description:
      "Showcasing tangible ways to improve client experiences in viewing ICF Website.",
    image: "/projects/ICFDemo.webp",
    tags: ["HTML", "CSS", "JavaScript", "Next.js"],
    demoURL:
      "https://649fca7ef8f8e602afff46c3--unrivaled-yeot-503c2b.netlify.app/",
    githubUrl: "https://github.com/joshuapark2/ICF-Demo",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="ground bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  {(project.demoURL ||
                    (project.githubUrl && project.githubUrl !== "#")) && (
                    <div className="flex space-x-3">
                      {project.demoURL && project.demoURL !== "#" && (
                        <a
                          href={project.demoURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/joshuapark2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
