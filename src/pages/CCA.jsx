import { Users } from "lucide-react";
import ImageCarousel from "../components/ImageCarousel";
import PortfolioCard from "../components/PortfolioCard";
import SectionCard from "../components/SectionCard";

import wsc1 from "../assets/cca/wsc/wsc1.jpg";
import wsc2 from "../assets/cca/wsc/wsc2.jpg";
import wsc3 from "../assets/cca/wsc/wsc3.jpg";
import wsc4 from "../assets/cca/wsc/wsc4.jpg";
import wsc5 from "../assets/cca/wsc/wsc5.jpg";
import wsc6 from "../assets/cca/wsc/wsc6.jpg";
import wsc7 from "../assets/cca/wsc/wsc7.jpg";
import wsc8 from "../assets/cca/wsc/wsc8.jpg";
import wsc9 from "../assets/cca/wsc/wsc9.jpg";

import igc1 from "../assets/cca/igc/igc1.jpg";
import igc10 from "../assets/cca/igc/igc10.jpg";
import igc11 from "../assets/cca/igc/igc11.jpg";
import igc12 from "../assets/cca/igc/igc12.jpg";
import igc2 from "../assets/cca/igc/igc2.jpg";
import igc3 from "../assets/cca/igc/igc3.jpg";
import igc4 from "../assets/cca/igc/igc4.jpg";
import igc5 from "../assets/cca/igc/igc5.jpg";
import igc6 from "../assets/cca/igc/igc6.jpg";
import igc7 from "../assets/cca/igc/igc7.jpg";
import igc8 from "../assets/cca/igc/igc8.jpg";
import igc9 from "../assets/cca/igc/igc9.jpg";

import vm1 from "../assets/cca/vm/vm1.jpg";
import vm2 from "../assets/cca/vm/vm2.jpg";
import vm3 from "../assets/cca/vm/vm3.jpg";
import vm4 from "../assets/cca/vm/vm4.jpg";
import vm5 from "../assets/cca/vm/vm5.jpg";
import vm6 from "../assets/cca/vm/vm6.jpg";
import vm7 from "../assets/cca/vm/vm7.jpg";
import vm8 from "../assets/cca/vm/vm8.jpg";
import vm9 from "../assets/cca/vm/vm9.jpg";

import spkc1 from "../assets/cca/spkc/spkc1.jpg";
import spkc2 from "../assets/cca/spkc/spkc2.jpg";
import spkc3 from "../assets/cca/spkc/spkc3.jpg";
import spkc4 from "../assets/cca/spkc/spkc4.jpg";
import spkc5 from "../assets/cca/spkc/spkc5.jpg";
import spkc6 from "../assets/cca/spkc/spkc6.jpg";
import spot1 from "../assets/cca/spot/spot1.jpg";

export const CCA = () => {
  const wscImages = [wsc1, wsc2, wsc3, wsc4, wsc5, wsc6, wsc7, wsc8, wsc9];
  const igcImages = [igc1, igc2, igc3, igc4, igc5, igc6, igc7, igc8, igc9, igc10, igc11, igc12];
  const vmImages = [vm1, vm2, vm3, vm4, vm5, vm6, vm7, vm8, vm9];
  const spotImages = [spot1];
  const spkcImages = [spkc1, spkc2, spkc3, spkc4, spkc5, spkc6];

  return (
    <PortfolioCard id="cca" title="Co-Curricular Activities">
      {/* WSC EXCO card */}
      <div id="wsc" className="scroll-mt-56">
        <SectionCard>
          <ImageCarousel images={wscImages} alt="Welfare Services Club Executive Committee" />
          <section className="text-gray-300 space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
              <Users className="w-5 h-5" />
              NTU Welfare Services Club 30th Executive Committee
            </h3>

            <p className="font-bold">
              Office Bearer
              <br />
              <span className="text-sm font-medium text-gray-400">Sep 2024 – Aug 2025</span>
            </p>

            <ul className="list-disc text-sm pl-4 space-y-1">
              <li>Collaborated with WSC Chairpersons to coordinate and support volunteering initiatives.</li>
              <li>Coordinated planning for NTU Open House 2025 for WSC.</li>
              <li>Represented WSC at the Responders, Partners and Volunteers Appreciation (RPVA) Event 2025 by SGSecure, receiving an award on behalf of the club.</li>
              <li>Participated in multiple leadership and personal development workshops.</li>
              <li>Joined the Singapore Youth Leader Programme (SYLP) 2025 by NYC (14–16 Jun 2025).</li>
              <li>Served as an Election Officer for WSC, overseeing rally campaigns for the 31st ExCo.</li>
            </ul>
          </section>
        </SectionCard>
      </div>

      {/* WSC IGC card */}
      <div id="igc" className="scroll-mt-56">
        <SectionCard>
          <ImageCarousel images={igcImages} alt="Ignite Change" />
          <section className="text-gray-300 space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
              <Users className="w-5 h-5" />
              NTU Welfare Services Club – Ignite Change (IGC)
            </h3>

            <p className="font-bold">
              Chairperson
              <br />
              <span className="text-sm font-medium text-gray-400">Sep 2024 – Aug 2025</span>
            </p>

            <ul className="list-disc text-sm pl-4 space-y-1">
              <li>Spearheaded the WSC Freshmen Orientation Programme (one of NTU’s Big 4 camps) on 25–27 Jul 2025 with 240+ freshmen.</li>
              <li>Oversaw a team of 13 IGC ExCo members and 67 Main Committee members.</li>
              <li>Planned and executed multiple bonding events to foster club cohesion.</li>
              <li>Organised volunteering initiatives with the Muscular Dystrophy Association Singapore (MDAS).</li>
              <li>Ignited the spirit of volunteerism among freshmen and club members.</li>
              <li>Previously a Programmer (in AY 23/24), responsible for planning orientation activities.</li>
            </ul>
          </section>
        </SectionCard>
      </div>

      {/* WSC VM card */}
      <div id="vm" className="scroll-mt-56">
        <SectionCard>
          <ImageCarousel images={vmImages} alt="Volunteer Movement" />
          <section className="text-gray-300 space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
              <Users className="w-5 h-5" />
              NTU Welfare Services Club – Volunteer Movement (VM)
            </h3>

            <p className="font-bold">
              Regular Volunteer
              <br />
              <span className="text-sm font-medium text-gray-400">Sep 2024 – Aug 2025</span>
            </p>

            <ul className="list-disc text-sm pl-4 space-y-1">
              <li>Volunteered monthly with various beneficiaries, including children, migrant workers, and the elderly.</li>
              <li>Served as Group Leader for Kid’s World (VM flagship event), leading 9 volunteers and guiding a group of 10 children.</li>
            </ul>
          </section>
        </SectionCard>
      </div>

      {/* SPOT Programme card */}
      <div id="spot" className="scroll-mt-56">
        <SectionCard>
          <ImageCarousel images={spotImages} alt="SP Outstanding Talent Programme" />
          <section className="text-gray-300 space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
              <Users className="w-5 h-5" />
              SP Outstanding Talent Programme (SPOT)
            </h3>

            <p className="font-bold">
              Club Member
              <br />
              <span className="text-sm font-medium text-gray-400">Apr 2019 – May 2021</span>
            </p>

            <ul className="list-disc text-sm pl-4 space-y-1">
              <li>Undertook specialised SP modules and courses in addition to the regular curriculum.</li>
              <li>Participated in seminars, workshops, and leadership activities to build knowledge on current affairs and strengthen leadership skills.</li>
              <li>Awarded Certificate of Achievement (Outstanding) at graduation for exceptional performance.</li>
            </ul>
          </section>
        </SectionCard>
      </div>

      {/* SP Karate card */}
      <div id="spkc" className="scroll-mt-56">
        <SectionCard>
          <ImageCarousel images={spkcImages} alt="SP Karate Club" />
          <section className="text-gray-300 space-y-3">
            <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
              <Users className="w-5 h-5" />
              SP Karate Club
            </h3>

            <p className="font-bold">
              Regular Trainee, Treasurer
              <br />
              <span className="text-sm font-medium text-gray-400">Apr 2018 – May 2021</span>
            </p>

            <ul className="list-disc text-sm pl-4 space-y-1">
              <li>Managed club finances, processed reimbursements, and oversaw overall expenses.</li>
              <li>Actively participated in training sessions and competitions.</li>
              <li>Assisted in organising club events and activities.</li>
              <li>Achieved Brown Belt (2 Tip) in 2021.</li>
            </ul>
          </section>
        </SectionCard>
      </div>
    </PortfolioCard>
  );
};

export default CCA;
