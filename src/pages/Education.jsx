import { GraduationCap } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import ScrollFloat from '../components/ScrollFloat/ScrollFloat';

import ntu1 from "../assets/education/ntu/ntu1.jpg";
import sp1 from "../assets/education/sp/sp1.jpg";
import sp2 from "../assets/education/sp/sp2.jpg";
import sp3 from "../assets/education/sp/sp3.jpg";
import sp4 from "../assets/education/sp/sp4.jpg";
import sp5 from "../assets/education/sp/sp5.jpg";

export const Education = () => {
  const ntuImages = [ntu1];
  const spImages = [sp1, sp2, sp3, sp4, sp5];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="education" className="relative z-10 py-20 px-6 lg:px-20">

      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.05}
      >
        Education
      </ScrollFloat>

      <div className="space-y-6">
        {/* NTU card */}
        <div className="card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={ntuImages} alt="NTU" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <GraduationCap className="w-6 h-6" />
                Nanyang Technological University
              </h3>

              <p className="font-bold">
                Bachelor of Computing (Hons) in Data Science and Artificial Intelligence
                <br />
                <span className="text-sm font-medium text-white/60">May 2023 – Present</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>School Scholarship, 2023 – Present</li>
                <li>Open House Student Ambassador, 2024</li>
                <li>College of Computing and Data Science (CCDS) Student Ambassador, 2024 – Present</li>
              </ul>

              <p className="font-bold">Clubs & Co-Curricular Activities</p>

              {/* CCAs Buttons */}
              <div className="flex items-center flex-wrap gap-3" aria-label="CCA links">
                <button
                  type="button"
                  onClick={() => scrollTo("wscexco")}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full border border-gray-500 hover:bg-gray-500 cursor-pointer"
                >
                  WSC ExCo
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("wscigc")}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full border border-gray-500 hover:bg-gray-500 cursor-pointer"
                >
                  WSC Ignite Change
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("wscvm")}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full border border-gray-500 hover:bg-gray-500 cursor-pointer"
                >
                  WSC Volunteer Movement
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* SP card */}
        <div className="card-shine p-6 bg-gray-900 rounded-2xl border border-gray-800 hover:border-gray-600 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition duration-300">
          <div className="grid gap-6 lg:grid-cols-[minmax(360px,400px)_1fr] items-start">
            <ImageCarousel images={spImages} alt="SP" />

            <section className="text-gray-300 space-y-3">
              <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
                <GraduationCap className="w-6 h-6" />
                Singapore Polytechnic
              </h3>

              <p className="font-bold">
                Diploma in Bioengineering (with Merit)
                <br />
                <span className="text-sm font-normal text-white/60">Apr 2018 – May 2021</span>
              </p>

              <ul className="list-disc text-sm pl-4 space-y-1">
                <li>Director's Honour Roll, AY 2018/2019</li>
                <li>Director's Honour Roll, AY 2019/2020</li>
                <li>Recipient of SP Engineering Show Winner Award, 2021</li>
                <li>Recipient of MAE Final Year Project Exhibition Gold Medal, 2021</li>
                <li>Diploma with Merit, 2021</li>
              </ul>

              <p className="font-bold">Clubs & Co-Curricular Activities</p>

              {/* CCAs Buttons */}
              <div className="flex items-center flex-wrap gap-3" aria-label="CCA links">
                <button
                  type="button"
                  onClick={() => scrollTo("spkc")}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full border border-gray-500 hover:bg-gray-500 cursor-pointer"
                >
                  SP Karate Club
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("spot")}
                  className="px-3 py-1 text-sm font-medium bg-gray-700 text-white rounded-full border border-gray-500 hover:bg-gray-500 cursor-pointer"
                >
                  SPOT Programme
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
