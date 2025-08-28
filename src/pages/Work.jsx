import { Briefcase } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';

import aisg1 from "../assets/work/aisg1.jpg";
import aisg2 from "../assets/work/aisg2.jpg";
import aisg3 from "../assets/work/aisg3.jpg";

export const Work = () => {
  const aisgImages = [aisg1, aisg2, aisg3];
  const certisImages = [aisg1]; 

  return (
    <section id="work" className="relative z-10 py-20 px-6 lg:px-20">

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.05}
      >
        Work Experiences
      </ScrollFloat>

      <div className="space-y-6">
        {/* Certis CISCO Card */}
        <div className="card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={certisImages} alt="Certis" />

              <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Briefcase className="w-6 h-6" />
                Certis Corporate University (CCU)
              </h3>

              <p className="font-bold">
                AI & Technology Systems Associate, Part-Time
                <br />
                <span className="text-sm font-medium text-white/60">Sep 2025 – Present</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Support efforts of the AI Community of Practice by providing expertise support to the AI Citizen Developer group, including projects (up to 20) they are developing in consultation with the AI Development Group (ADG)</li>
                <li>Support the consolidation of issues and facilitate the consultation sessions between the citizen developer groups and ADG</li>
                <li>Support the curation of learning for the Centre for AI and Technology Systems</li>
                <li>Streamline and automate work processes using AI and programming</li>
              </ul>
            </section>
          </div>
        </div>

        {/* AI Singapore Card */}
        <div className="card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={aisgImages} alt="AI Singapore" />

              <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <Briefcase className="w-6 h-6" />
                AI Singapore (AISG)
              </h3>

              <p className="font-bold">
                AI Engineer, Intern
                <br />
                <span className="text-sm font-medium text-white/60">May 2024 – Aug 2024</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Collaborated with a team of 6 to improve the accuracy and factuality of a Large Language Model (LLM)</li>
                <li>Developed and integrated citation features to ensure LLM-generated outputs were verifiable and aligned with source references</li>
                <li>Applied software engineering best practices, including version control, code reviews, and unit testing, to maintain a robust and scalable codebase</li>
                <li>Participated in agile methodologies, including sprint planning, sprint reviews, daily stand-ups, and retrospectives, to ensure project milestones were met</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
