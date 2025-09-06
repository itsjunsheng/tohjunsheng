import { Briefcase } from "lucide-react";
import ElementCard from "../components/ElementCard";
import ImageCarousel from "../components/ImageCarousel";
import SectionCard from "../components/SectionCard";

import aisg1 from "../assets/work/aisg/aisg1.jpg";
import aisg2 from "../assets/work/aisg/aisg2.jpg";
import aisg3 from "../assets/work/aisg/aisg3.jpg";
import certis1 from "../assets/work/certis/certis1.jpg";

export const Work = () => {
  const aisgImages = [aisg1, aisg2, aisg3];
  const certisImages = [certis1]; 

  return (
    <SectionCard id="work" title="Work Experiences">
      {/* Certis Card */}
      <ElementCard>
        <ImageCarousel images={certisImages} alt="Certis" />

        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <Briefcase className="w-5 h-5" />
            Certis Corporate University (CCU)
          </h3>

          <p className="font-bold">
            AI & Technology Systems Associate, Part-Time
            <br />
            <span className="text-sm font-medium text-gray-300">Sep 2025 – Present</span>
          </p>

          <ul className="list-disc text-sm pl-4 space-y-1">
            <li>Supported the AI Community of Practice by assisting AI Citizen Developer groups with up to 20 active projects in consultation with the AI Development Group (ADG).</li>
            <li>Consolidated issues and facilitated consultation sessions between citizen developers and ADG.</li>
            <li>Curated learning resources for the Centre for AI and Technology Systems.</li>
            <li>Streamlined and automated work processes using AI and programming.</li>
          </ul>
        </section>
      </ElementCard>

      {/* AI Singapore Card */}
      <ElementCard>
        <ImageCarousel images={aisgImages} alt="AI Singapore" />

        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <Briefcase className="w-5 h-5" />
            AI Singapore (AISG)
          </h3>

          <p className="font-bold">
            AI Engineer, Intern
            <br />
            <span className="text-sm font-medium text-gray-300">May 2024 – Aug 2024</span>
          </p>

          <ul className="list-disc text-sm pl-4 space-y-1">
            <li>Collaborated with a team of 6 to improve the accuracy and factuality of a Large Language Model (LLM).</li>
            <li>Developed and integrated citation features to ensure LLM outputs were verifiable and aligned with source references.</li>
            <li>Applied software engineering best practices, including version control, code reviews, and unit testing, to maintain a robust and scalable codebase.</li>
            <li>Participated in agile practices such as sprint planning, reviews, daily stand-ups, and retrospectives to meet project milestones.</li>
          </ul>
        </section>
      </ElementCard>
    </SectionCard>
  );
};

export default Work;
