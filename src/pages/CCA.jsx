import { Users } from "lucide-react";
import { useState } from "react";
import ElementCard from "../components/ElementCard";
import ImageCarousel from "../components/ImageCarousel";
import Modal from "../components/Modal";
import SectionCard from "../components/SectionCard";

import wsc1 from "../assets/cca/wsc/wsc1.jpg";
import wsc2 from "../assets/cca/wsc/wsc2.jpg";
import wsc3 from "../assets/cca/wsc/wsc3.jpg";
import wsc4 from "../assets/cca/wsc/wsc4.jpg";
import wsc5 from "../assets/cca/wsc/wsc5.jpg";
import wsc6 from "../assets/cca/wsc/wsc6.jpg";
import wsc7 from "../assets/cca/wsc/wsc7.jpg";

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

import spot1 from "../assets/cca/spot/spot1.jpg";

export const CCA = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const wscImages = [wsc1, wsc2, wsc3, wsc4, wsc5, wsc6, wsc7];
  const igcImages = [igc1, igc2, igc3, igc4, igc5, igc6, igc7, igc8, igc9, igc10, igc11, igc12];
  const vmImages = [vm1, vm2, vm3, vm4, vm5, vm6, vm7, vm8, vm9];
  const spotImages = [spot1];
  const spkcImages = [spkc1, spkc2, spkc3, spkc4, spkc5];

  const modalInfo = {
    igc: {
      title: "WSC Ignite Change Testimonial",
      fileSrc: "/igc_testimonial.pdf",
      fileType: "pdf",
    },
    vm: {
      title: "WSC Volunteer Movement Certificate",
      fileSrc: "/vm_certificate.jpg",
      fileType: "image",
    },
  };

  return (
    <SectionCard id="cca" title="Co-Curricular Activities">
      {/* WSC EXCO card */}
      <ElementCard id="wsc" className="scroll-mt-56">
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
            <li>Collaborated with Chairpersons across various WSC portfolios to support volunteering projects and initiatives.</li>
            <li>Coordinated the planning and execution of NTU Open House 2025 for WSC.</li>
            <li>Represented WSC at the Responders, Partners and Volunteers Appreciation (RPVA) Event 2025 by SGSecure, receiving an award on behalf of the club.</li>
            <li>Participated actively in multiple leadership and personal development workshops.</li>
            <li>Served as an Election Officer for WSC, overseeing rally campaigns for WSC 31st ExCo.</li>
          </ul>
        </section>
      </ElementCard>

      {/* WSC IGC card */}
      <ElementCard id="igc" className="scroll-mt-56">
        <ImageCarousel images={igcImages} alt="Ignite Change" />
        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <Users className="w-5 h-5" />
            NTU Welfare Services Club – Ignite Change (IGC)
          </h3>
          <div className="flex justify-between items-start">
            <p className="font-bold">
              Chairperson
              <br />
              <span className="text-sm font-medium text-gray-400">Sep 2024 – Aug 2025</span>
            </p>
            <button
              onClick={() => setSelectedModal("igc")}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full whitespace-nowrap cursor-pointer"
            >
              View Testimonial
            </button>
          </div>
          <ul className="list-disc text-sm pl-4 space-y-1">
            <li>Spearheaded the WSC Freshmen Orientation Programme (one of NTU’s Big 4 camps) with over 240 freshmen.</li>
            <li>Oversaw a team of 13 IGC ExCo members and 67 Main Committee members.</li>
            <li>Planned and executed multiple bonding events throughout the term to strengthen club cohesion.</li>
            <li>Organised volunteering initiatives with the Muscular Dystrophy Association Singapore.</li>
            <li>Fostered the spirit of volunteerism among freshmen and club members.</li>
          </ul>
        </section>
      </ElementCard>

      {/* WSC VM card */}
      <ElementCard id="vm" className="scroll-mt-56">
        <ImageCarousel images={vmImages} alt="Volunteer Movement" />
        <section className="text-gray-300 space-y-3">
          <h3 className="flex items-center gap-2 text-xl font-bold text-blue-600 -mt-2">
            <Users className="w-5 h-5" />
            NTU Welfare Services Club – Volunteer Movement (VM)
          </h3>
          <div className="flex justify-between items-start">
            <p className="font-bold">
              Regular Volunteer
              <br />
              <span className="text-sm font-medium text-gray-400">Sep 2024 – Aug 2025</span>
            </p>
            <button
              onClick={() => setSelectedModal("vm")}
              className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full whitespace-nowrap cursor-pointer"
            >
              View Certificate
            </button>
          </div>
          <ul className="list-disc text-sm pl-4 space-y-1">
            <li>Volunteered monthly with various beneficiaries, including children, migrant workers, and the elderly.</li>
            <li>Engaged in monthly meetings to discuss and plan upcoming volunteering initiatives.</li>
            <li>Served as Group Leader for Kid’s World (VM's flagship event), leading 9 volunteers and facilitating activities for a group of 10 children.</li>
          </ul>
        </section>
      </ElementCard>

      {/* SPOT Programme card */}
      <ElementCard id="spot" className="scroll-mt-56">
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
      </ElementCard>

      {/* SP Karate card */}
      <ElementCard id="spkc" className="scroll-mt-56">
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
            <li>Managed club finances by overseeing budgeting, expense tracking, and fund allocation to support club activities.</li>
            <li>Handled claims and reimbursements for club activities.</li>
            <li>Participated regularly (twice a week) in Karate training sessions.</li>
            <li>Coordinated with the club President to plan and organise club activities.</li>
            <li>Promoted to Brown Belt 2-tip (2nd Kyu) in Jan 2021.</li>
          </ul>
        </section>
      </ElementCard>

      {/* Modal */}
      {selectedModal && (
        <Modal
          isOpen={!!selectedModal}
          onClose={() => setSelectedModal(null)}
          title={modalInfo[selectedModal].title}
          fileSrc={modalInfo[selectedModal].fileSrc}
          fileType={modalInfo[selectedModal].fileType}
        />
      )}
    </SectionCard>
  );
};

export default CCA;
