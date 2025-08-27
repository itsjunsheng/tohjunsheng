import { ExternalLink, Github } from "lucide-react";
import OnlyFoodsImage from "../assets/projects/OnlyFoods_Image.jpg";
import OwadioImage from "../assets/projects/Owadio_Image.jpg";
import SynonymsImage from "../assets/projects/Synonyms_Image.jpg";
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';

export const Projects = () => {
  const projects = [
    {
      title: "Synonyms (word-guessing game)",
      description:
        "This game uses AI to generate synonyms for the hidden word. Note that it may take up to a minute to load the first game due to cold start. Feel free to give it a try :)",
      tech: ["React", "JavaScript", "Tailwind CSS", "Groq API", "Vercel", "Render Backend"],
      github: "https://github.com/itsjunsheng/SYNONYMS",
      live: "https://www.synonyms.me/",
      image: SynonymsImage,
    },
    {
      title: "Owadio",
      description:
        "A web app for Full-time National Servicemen (NSFs) and Pre-Enlistees to track countdowns to their ORD or Enlistment dates.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jxxsheng/owadio",
      live: "https://owadio.com",
      image: OwadioImage,
    },
    {
      title: "Food Social Media",
      description:
        "Developed as part of SC2006 Software Engineering project, this platform enables food enthusiasts to share recipes, explore new dishes, and track nutritional intake.",
      tech: ["Node.js", "Express", "JavaScript", "CSS", "SupaBase"],
      github: "https://github.com/jxxsheng/OnlyFoods",
      live: "https://youtu.be/TNKK4Agpqcc",
      image: OnlyFoodsImage,
    },
  ];

  return (
    <section id="projects" className="relative z-10 py-20 px-6 lg:px-20">
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.05}
      >
        Personal Projects
      </ScrollFloat>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800"
          >
            <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-5 space-y-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium bg-gray-700 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm border border-gray-600 text-white rounded-md hover:bg-gray-700 transition"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
