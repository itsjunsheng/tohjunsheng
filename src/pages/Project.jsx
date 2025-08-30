import { ExternalLink, Github } from "lucide-react";
import PortfolioCard from "../components/PortfolioCard";

import onlyfoodsImage from "../assets/project/onlyfoods.jpg";
import owadioImage from "../assets/project/owadio.jpg";
import synonymsImage from "../assets/project/synonyms.jpg";

export const Project = () => {
  const projects = [
    {
      title: "Synonyms (word-guessing game)",
      description:
        "This game uses AI to generate synonyms for the hidden word. Note: it may take up to a minute to load the first game due to cold start. Feel free to give it a try :)",
      tech: ["React", "JavaScript", "Tailwind CSS", "Groq API", "Vercel", "Render Backend"],
      github: "https://github.com/itsjunsheng/SYNONYMS",
      live: "https://www.synonyms.me/",
      image: synonymsImage,
    },
    {
      title: "Owadio",
      description:
        "A web app for Full-time National Servicemen (NSFs) and Pre-Enlistees to track countdowns to their ORD or Enlistment dates.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/jxxsheng/owadio",
      live: "https://owadio.com",
      image: owadioImage,
    },
    {
      title: "Food Social Media",
      description:
        "Developed as part of SC2006 Software Engineering project, this platform enables food enthusiasts to share recipes, explore new dishes, and track nutritional intake.",
      tech: ["Node.js", "Express", "JavaScript", "CSS", "SupaBase"],
      github: "https://github.com/jxxsheng/OnlyFoods",
      live: "https://youtu.be/TNKK4Agpqcc",
      image: onlyfoodsImage,
    },
  ];

  return (
    <PortfolioCard id="project" title="Personal Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>

              {/* Tech stack */}
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

              {/* Buttons */}
              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 text-sm border border-gray-600 text-white rounded-md hover:bg-gray-700 transition"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-1.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Deploy
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PortfolioCard>
  );
};

export default Project;
