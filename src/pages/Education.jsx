import { GraduationCap } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import PortfolioCard from "../components/PortfolioCard";
import SectionCard from "../components/SectionCard";

import ntu1 from "../assets/education/ntu/ntu1.jpg";
import ntu2 from "../assets/education/ntu/ntu2.jpg";
import ntu3 from "../assets/education/ntu/ntu3.jpg";
import ntu4 from "../assets/education/ntu/ntu4.jpg";

import sp1 from "../assets/education/sp/sp1.jpg";
import sp2 from "../assets/education/sp/sp2.jpg";
import sp3 from "../assets/education/sp/sp3.jpg";
import sp4 from "../assets/education/sp/sp4.jpg";
import sp5 from "../assets/education/sp/sp5.jpg";
import sp6 from "../assets/education/sp/sp6.jpg";

export const Education = () => {
  const ntuImages = [ntu1, ntu2, ntu3, ntu4];
  const spImages = [sp1, sp2, sp3, sp4, sp5, sp6];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ntuCcaLinks = [
    { id: "wsc", label: "WSC ExCo" },
    { id: "igc", label: "WSC Ignite Change" },
    { id: "vm", label: "WSC Volunteer Movement" },
  ];

  const spCcaLinks = [
    { id: "spkc", label: "SP Karate Club" },
    { id: "spot", label: "SPOT Programme" },
  ];

  const renderCcaButtons = (links) =>
    links.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollTo(id)}
        className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-blue-600 transition cursor-pointer"
      >
        {label}
      </button>
    ));

  return (
    <PortfolioCard id="education" title="Education">
      {/* NTU card */}
      <SectionCard>
        <ImageCarousel images={ntuImages} alt="NTU" />
        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <GraduationCap className="w-6 h-6" />
            Nanyang Technological University
          </h3>

          <p className="font-bold">
            Bachelor of Computing (Hons) in Data Science and Artificial Intelligence
            <br />
            <span className="text-sm font-medium text-gray-400">May 2023 – Present</span>
          </p>

          <ul className="list-disc text-sm pl-4">
            <li>School Scholarship, 2023 – Present</li>
            <li>Open House Student Ambassador, 2024</li>
            <li>College of Computing and Data Science (CCDS) Student Ambassador, 2024 – Present</li>
          </ul>

          <p className="font-bold">Clubs & Co-Curricular Activities</p>
          <div className="flex items-center flex-wrap gap-2" aria-label="CCA links">
            {renderCcaButtons(ntuCcaLinks)}
          </div>
        </section>
      </SectionCard>

      {/* SP card */}
      <SectionCard>
        <ImageCarousel images={spImages} alt="SP" />
        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <GraduationCap className="w-6 h-6" />
            Singapore Polytechnic
          </h3>

          <p className="font-bold">
            Diploma in Bioengineering (with Merit)
            <br />
            <span className="text-sm font-normal text-gray-400">Apr 2018 – May 2021</span>
          </p>

          <ul className="list-disc text-sm pl-4">
            <li>Director's Honour Roll, AY 2018/2019</li>
            <li>Director's Honour Roll, AY 2019/2020</li>
            <li>Recipient of SP Engineering Show Winner Award, 2021</li>
            <li>Recipient of MAE Final Year Project Exhibition Gold Medal, 2021</li>
            <li>Diploma with Merit, 2021</li>
          </ul>

          <p className="font-bold">Clubs & Co-Curricular Activities</p>
          <div className="flex items-center flex-wrap gap-2" aria-label="CCA links">
            {renderCcaButtons(spCcaLinks)}
          </div>
        </section>
      </SectionCard>
    </PortfolioCard>
  );
};

export default Education;
